import * as fs from "fs";
import {PathLike} from "fs";
import {KloudResource} from "./KloudResource";
import {aws, AWS} from "./aws";
import {ApiDefinition} from "./modules/api";
import {transform, Value} from "./Value";

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


export interface Outputs {
  apis?: ApiDefinition[];
  outputs?: { [logicalId: string]: {
      description? : string;
      value: Value<any>;
      export?: { name: string };
    }; };
}

type Builder = (aws: AWS) => void | Outputs
type BuilderWith<ParamType, C> = (aws: AWS, parameters: Params<ParamType>, conditional: <R>(condition: C, resource: R) => R) => void | Outputs


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
  
  private static capitalize<T extends any>(props: T): T | Value<string> {
    function caps(key: string): string { return key.substring(0,1).toUpperCase() + key.substring(1) }
    if(typeof props === 'object') {
      if(Array.isArray(props)){
        return props.map(Template.capitalize) as any;
      }
      if(props['_nocaps'] !== undefined) {
        const {_nocaps, ...rest} = props as any;
        return rest;
      }
      return transform(Object.keys(props as any).reduce((prev, key) => ({...prev, [caps(key)]: Template.capitalize(props[key])}), {} as any) as any)
    }
    return props;
  }
  
  
  static create(
    builder: Builder,
    file: PathLike = "template.json",
    transform: (template: KloudFormationTemplate) => string = template => JSON.stringify(template, null, 2)
  ): {template: KloudFormationTemplate; outputs?: Outputs} {
    return Template.createWithParams({}, {}, builder, file, "parameters.json", transform);
  }
  
  
  static createWithParams<T extends {[param: string]: Parameter}, C extends string = string>(
    parameters: T,
    conditions: Record<C, any>,
    builder: BuilderWith<T, C>,
    file: PathLike = "template.json",
    paramsFile: PathLike = "parameters.json",
    transform: (template: KloudFormationTemplate) => string = template => JSON.stringify(template, null, 2)
  ): {template: KloudFormationTemplate; outputs?: Outputs} {
    const template = new Template();
    const logicalNameFunction = (prefix: string) => template.logicalName(prefix);
    const builderAws = Object.keys(aws)
    .filter(name => name !== 'logicalName')
    .reduce((prev, key) => Object.assign(prev, {[key]: template.modify((aws as any)[key])}), { logicalName: logicalNameFunction } as AWS);
    const parameterFunctions = Object.keys(parameters).reduce((prev, parameter) => ({...prev, [parameter]: () => ({'Ref': parameter})}), {} as Params<T>)
    const outputs = builder(builderAws, parameterFunctions, ((condition, resource) => { (resource as any)._condition = condition; return resource; }));
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
      Outputs: (outputs && outputs.outputs) ? Object.keys(outputs.outputs).reduce((prev, logicalId) => {
        const output = (outputs.outputs as any)[logicalId];
        return ({
          ...prev,
          [logicalId]: {
            Description: output.description,
            Value: output.value,
            Export: output.export ? { Name: output.export!.name } : undefined
          }
        })
      }, {} as KloudFormationTemplate['Outputs']) : undefined
    };
    if(file) {
      fs.writeFileSync(file, transform(output));
      fs.writeFileSync(paramsFile, JSON.stringify(envParams));
    }
    return {template: output, outputs: outputs || undefined};
  }
}


export class TemplateBuilder<P extends {[param: string]: Parameter}, C extends string = string> {
  private parameters: {[param: string]: Parameter} = {};
  private outputDir = '';
  private conditions: Record<string, any> = {};
  private transform: (template: KloudFormationTemplate) => string = template => JSON.stringify(template, null, 2)
  constructor(public outputFileName: string, public parameterFileName: string = "parameters.json") {}

  withCondition<S extends string>(name: S, condition: any): TemplateBuilder<P, C | S> {
    this.conditions[name] = condition;
    return this as any;
  }

  params<P2 extends {[param: string]: Parameter}>(params: P2): TemplateBuilder<P & P2, C> {
    this.parameters = {...this.parameters, ...params};
    return this as TemplateBuilder<P & P2, C>;
  }

  envParams<P2 extends {[params: string]: string}>(params: P2): TemplateBuilder<P & {[K in keyof P2]: {type: 'Future'; environmentName: P2[K]}}, C> {
    this.parameters = {...this.parameters, ...Object.keys(params).reduce((prev, key) => ({...prev, [key]: {type: 'Future', environmentName: params[key]}}), {})};
    return this as TemplateBuilder<P & {[K in keyof P2]: {type: 'Future'; environmentName: P2[K]}}, C>;
  }

  outputTo(directory: string): this {
    this.outputDir = directory;
    return this;
  }

  transformTemplate(transform: (template: KloudFormationTemplate) => string = template => JSON.stringify(template, null, 2)): this {
    this.transform = transform;
    return this;
  }

  private pathTo(file: string): string {
    if(this.outputDir) {
      fs.mkdirSync(this.outputDir, {recursive: true});
    }
    return (this.outputDir ? this.outputDir + '/' : '') + file;
  }

  build(builder: BuilderWith<P, C>): {template: KloudFormationTemplate; outputs?: Outputs} {
    return Template.createWithParams<P, C>((this.parameters ?? {}) as any, this.conditions, builder, this.pathTo(this.outputFileName), this.pathTo(this.parameterFileName), this.transform);
  }


  static create<C extends string = string>(outputFileName = 'template.json', parametersFileName='parameters.json'): TemplateBuilder<{}, C> {
    return new TemplateBuilder(outputFileName, parametersFileName);
  }
}