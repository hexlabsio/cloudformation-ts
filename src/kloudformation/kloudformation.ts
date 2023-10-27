import * as fs from "fs";
import {PathLike} from "fs";
import {KloudResource} from "./KloudResource";
import {ApiDefinition} from "./modules/api";
import { customResource } from './modules/custom-resource';
import {transform, Value} from "./Value";

export * from './iam/iamActions';
export * from './iam/PolicyDocument';

export * from './modules/api';
export * from './modules/cron';
export * from './modules/custom-resource';
export * from './modules/dynamo';
export * from './modules/lambda';
export * from './modules/website';

export * from './Attribute';
export * from './aws';
export * from './aws-resources';
export * from './KloudResource';
export * from './Value';

export interface KloudFormationTemplate<C extends string = string> {
  Conditions?: Record<C, any>;
  Description?: string;
  Parameters: {
    [parameter: string]: {
      Type: string;
      Default?: string;
      AllowedValues? : string[];
      Description? : string;
    };
  };
  Resources: {
    [logicalName: string]: {
      Type: string;
      Condition: C;
      Properties?: any;
    };
  };
  Transform?: string[];
  Outputs?: {
    [logicalId: string]: {
      Description?: string;
      Value: any;
      Export?: { Name: string };
    };
  };
}

type Parameter = ({
  type: string;
} | {
  type: 'Future';
  environmentName: string;
}) & {
  default?: string;
  allowedValues? : string[];
  description? : string;
}

type Params<T> = { [K in keyof T]: <R = string>() => Value<R> }


export interface Output {
  description? : string;
  value: Value<any>;
  export?: { name: string };
}
export interface Outputs {
  apis?: ApiDefinition[];
  outputs?: Record<string, Output>;
}

export function stackOutput(value: Value<string>, description?: string, exportName?: string): Output {
  return { value, description: description ?? '', ...(exportName ? { export: { name: exportName } } : {})};
}

export function keepCase<T>(item: T): T {
  if(typeof item === 'object') {
    if(Array.isArray(item)) {
      return item.map(keepCase) as T;
    }
    if(!Object.prototype.hasOwnProperty.call(item, 'Ref'))
      return Object.keys(item as any).reduce((prev, next) => ({...prev, [next]: keepCase((item as any)[next])}), {_nocaps: true} as T);
  }
  return item;
}

type Builder<AWS> = (aws: AWS) => void | Outputs
type BuilderWith<AWS, ParamType, C> = (aws: AWS, parameters: Params<ParamType>, conditional: <R>(condition: C, resource: R) => R) => void | Outputs


export function normalize(name: string) {
  return name.split(/[^a-zA-Z0-9]/g).reduce((prev, current) => `${prev}${current.substring(0,1).toUpperCase()}${current.substring(1)}`, '');
}

export function fromEnv<S>(environmentName: S): {type: 'Future'; environmentName: S} {
  return {type: 'Future', environmentName};
}

export class Template {
  private logicalNames: string[] = [];

  resources: KloudResource[] = [];

  private logicalName(prefix: string): string {
    const _prefix = prefix.substring(0, 60)
    const prefixed = this.logicalNames.filter(it => it.startsWith(_prefix));
    if(prefixed.length === 0){
      this.logicalNames.push(_prefix);
      return prefix;
    } else {
      let index = prefixed.length + 1;
      while(this.logicalNames.find(it => it === _prefix + index)) {
        index ++;
      }
      this.logicalNames.push(_prefix + index);
      return _prefix + index;
    }
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  private modify<T extends Function>(a: T): T {
    return ((...args: any) => {
      const resource: KloudResource = a(...args);
      const prefix = resource._logicalType!.replace(/::/g, '.').split('.').pop()!;
      const logicalName = Object.prototype.hasOwnProperty.call(resource, '_logicalName') ? resource._logicalName : this.logicalName(prefix);
      if(this.resources.find(it => it._logicalName === logicalName)) {
        throw Error(`Logical Name ${logicalName} for resource type ${resource._logicalType} is already being used, try updating it to something else.`);
      }
      const { attributes } = resource as any;
      const result  = {
        ...resource,
        _logicalName: logicalName,
        condition: (condition: string) => {
          const location = this.resources.findIndex(it => it._logicalName === logicalName);
          this.resources[location] = { ...this.resources[location], _condition: condition };
        },
        attributes: Object.keys(attributes || []).reduce((prev, attribute) => ({...prev, [attribute]: {'Fn::GetAtt': [logicalName, attributes[attribute].replace(/_/g,'.')]}}), {})
      };
      this.resources.push(result);
      return result
    }) as unknown as T;
  }

  private static capitalize<T>(props: T): T | Value<string> {
    function caps(key: string): string { return key.substring(0,1).toUpperCase() + key.substring(1) }
    if(typeof props === 'object') {
      if(Array.isArray(props)){
        return props.map(Template.capitalize) as any;
      }
      if(props?.['_nocaps'] !== undefined) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const {_nocaps, ...rest} = props as any;
        return rest;
      }
      return transform(Object.keys(props as any).reduce((prev, key) => ({...prev, [caps(key)]: Template.capitalize(props?.[key])}), {} as any) as any)
    }
    return props;
  }


  static create<AWS>(
    aws: AWS,
    builder: Builder<AWS>,
    file: PathLike = "template.json",
    templateTransform: (template: KloudFormationTemplate) => string = template => JSON.stringify(template, null, 2)
  ): {template: KloudFormationTemplate; outputs?: Outputs} {
    return Template.createWithParams(aws, {}, {}, builder, file, "parameters.json", templateTransform);
  }


  static createWithParams<AWS, T extends {[param: string]: Parameter}, C extends string = string>(
    aws: AWS,
    parameters: T,
    conditions: Record<C, any>,
    builder: BuilderWith<AWS, T, C>,
    file: PathLike = "template.json",
    paramsFile: PathLike = "parameters.json",
    templateTransform: (template: KloudFormationTemplate) => string = template => JSON.stringify(template, null, 2),
    transForms?: string[]
  ): {template: KloudFormationTemplate; outputs?: Outputs} {
    const template = new Template();
    const logicalNameFunction = (prefix: string) => template.logicalName(prefix);
    const builderAws = Object.keys(aws as any).reduce((prev1, next1) =>
      ({
        ...prev1, [next1]: Object.keys(aws[next1])
          .filter(name => name !== 'logicalName')
          .reduce((prev, key) => ({...prev, [key]: template.modify(aws[next1][key])}), {})
      })
    , {logicalName: logicalNameFunction} as any)
    const parameterFunctions = Object.keys(parameters).reduce((prev, parameter) => ({...prev, [parameter]: () => ({'Ref': parameter})}), {} as Params<T>)
    const outputs = builder({...builderAws, customResource}, parameterFunctions, ((condition, resource) => { (resource as any)._condition = condition; return resource; }));
    const envParams = Object.keys(parameters).reduce((prev, param) => {
      const parameter = parameters[param] as any;
      if(parameter.type === 'Future')
        return {...prev, [param]: {envName: parameter.environmentName!}}
      return prev;
    },{});
    const output: KloudFormationTemplate = {
      ...(Object.keys(conditions ?? {}).length ? { Conditions: conditions } : {}),
      Parameters: Object.keys(parameters).reduce((prev, param) => {
        const parameter = parameters[param];
        return {
          ...prev,
          [param]: {
            Type: parameter.type === 'Future' ? 'String' : parameter.type,
            Default: parameter.default!,
            AllowedValues: parameter.allowedValues!,
            Description: parameter.description!
          }
        }
      }, {} as KloudFormationTemplate['Parameters']),
      Resources: (template.resources as any[]).reduce((prev, {_logicalName, _logicalType, _dependsOn, _deletionPolicy, _condition, attributes, ...properties}) => ({
        ...prev,
        [_logicalName!]: {
          Type: _logicalType!,
          ...(_deletionPolicy ? { 'DeletionPolicy': _deletionPolicy }: {}),
          ...(_condition ? { 'Condition': _condition }: {}),
          ...(_dependsOn ? {DependsOn: _dependsOn.map(it => typeof it === 'object' ? it['_logicalName'] : it)}: {}),
          ...(Object.keys(properties).length === 0 ? {} : { Properties: Template.capitalize(properties) })
        }
      }), {} as KloudFormationTemplate['Resources']),
      Transform: transForms,
      Outputs: (outputs && outputs.outputs) ? Object.keys(outputs.outputs).reduce((prev, logicalId) => {
        const output = (outputs.outputs as any)[logicalId];
        return ({
          ...prev,
          [logicalId]: {
            Description: output.description,
            Value: transform(output.value),
            Export: output.export ? { Name: output.export!.name } : undefined
          }
        })
      }, {} as KloudFormationTemplate['Outputs']) : undefined
    };
    if(file) {
      const location = file as string;
      const dir = location.substring(0, location.lastIndexOf('/') + 1);
      if(dir.endsWith('/')) {
        fs.mkdirSync(dir, { recursive: true });
      }
      fs.writeFileSync(file, templateTransform(output));
      fs.writeFileSync(paramsFile, JSON.stringify(envParams));
    }
    return {template: output, outputs: outputs || undefined} as any;
  }
}


export class TemplateBuilder<AWS, P extends {[param: string]: Parameter}, C extends string = string> {
  private parameters: {[param: string]: Parameter} = {};
  private outputDir = '';
  private conditions: Record<string, any> = {};
  private _templateTransform: (template: KloudFormationTemplate) => string = template => JSON.stringify(template, null, 2);
  private transforms: string[] = [];
  constructor(private readonly aws: AWS, public outputFileName: string, public parameterFileName: string = "parameters.json") {}

  withCondition<S extends string>(name: S, condition: any): TemplateBuilder<AWS, P, C | S> {
    this.conditions[name] = condition;
    return this as any;
  }

  withTransform(transform: string): TemplateBuilder<AWS, P, C> {
    this.transforms.push(transform);
    return this
  }

  params<P2 extends {[param: string]: Parameter}>(params: P2): TemplateBuilder<AWS, P & P2, C> {
    this.parameters = {...this.parameters, ...params};
    return this as any;
  }

  envParams<P2 extends {[params: string]: string}>(params: P2): TemplateBuilder<AWS, P & {[K in keyof P2]: {type: 'Future'; environmentName: P2[K]}}, C> {
    this.parameters = {...this.parameters, ...Object.keys(params).reduce((prev, key) => ({...prev, [key]: {type: 'Future', environmentName: params[key]}}), {})};
    return this as any;
  }

  outputTo(directory: string): this {
    this.outputDir = directory;
    return this;
  }

  transformTemplate(_templateTransform: (template: KloudFormationTemplate) => string = template => JSON.stringify(template, null, 2)): this {
    this._templateTransform = _templateTransform;
    return this;
  }

  private pathTo(file: string): string {
    if(this.outputDir) {
      fs.mkdirSync(this.outputDir, {recursive: true});
    }
    return (this.outputDir ? this.outputDir + '/' : '') + file;
  }

  build(builder: BuilderWith<AWS, P, C>): {template: KloudFormationTemplate; outputs?: Outputs} {
    return Template.createWithParams<AWS, P, C>(this.aws, (this.parameters ?? {}) as any,
        this.conditions,
        builder,
        this.pathTo(this.outputFileName),
        this.pathTo(this.parameterFileName),
        this._templateTransform,
        this.transforms.length > 0 ? this.transforms : undefined);
  }

  static create<AWS, C extends string = string>(aws: AWS, outputFileName = 'template.json', parametersFileName='parameters.json'): TemplateBuilder<AWS, {}, C> {
    return new TemplateBuilder(aws, outputFileName, parametersFileName);
  }
}
