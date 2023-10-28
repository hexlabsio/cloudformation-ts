import fs from 'fs';
import { PathLike } from 'fs';
import { customResource } from '../modules/custom-resource';
import { AwsResource } from '../resources/AwsResource';
import { transform } from '../Value';
import { CloudFormationTemplate } from './cloudformation-template';
import { Outputs } from './outputs';
import { Parameter, Params } from './parameter';

export type Builder<AWS> = (aws: AWS) => void | Outputs
export type BuilderWith<AWS, ParamType, C> = (aws: AWS, parameters: Params<ParamType>, conditional: <R>(condition: C, resource: R) => R) => void | Outputs

export class TemplateCreator {
  private logicalNames: string[] = [];

  resources: AwsResource<string, any, any>[] = [];

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
      const resource: AwsResource<string, any, any> = a(...args);
      const prefix = resource.type!.replace(/::/g, '.').split('.').pop()!;
      const logicalName = resource.logicalName ?? this.logicalName(prefix);
      if(this.resources.find(it => it.logicalName === logicalName)) {
        throw Error(`Logical Name ${logicalName} for resource type ${resource.type} is already being used, try updating it to something else.`);
      }
      const attributes = resource.attributes;
      resource.attributes = Object.keys(attributes || []).reduce((prev, attribute) => ({...prev, [attribute]: {'Fn::GetAtt': [logicalName, attributes[attribute].replace(/_/g,'.')]}}), {})
      resource.logicalName = logicalName;
      this.resources.push(resource);
      return resource;
    }) as unknown as T;
  }


  static create<AWS>(
    aws: AWS,
    builder: Builder<AWS>,
    file: PathLike = "template.json",
    templateTransform: (template: CloudFormationTemplate) => string = template => JSON.stringify(template, null, 2)
  ): {template: CloudFormationTemplate; outputs?: Outputs} {
    return TemplateCreator.createWithParams(aws, {}, {}, builder, file, "parameters.json", templateTransform);
  }


  static createWithParams<AWS, T extends {[param: string]: Parameter}, C extends string = string>(
    aws: AWS,
    parameters: T,
    conditions: Record<C, any>,
    builder: BuilderWith<AWS, T, C>,
    file: PathLike = "template.json",
    paramsFile: PathLike = "parameters.json",
    templateTransform: (template: CloudFormationTemplate) => string = template => JSON.stringify(template, null, 2),
    transForms?: string[]
  ): {template: CloudFormationTemplate; outputs?: Outputs} {
    const template = new TemplateCreator();
    const logicalNameFunction = (prefix: string) => template.logicalName(prefix);
    const builderAws = Object.keys(aws as any).reduce((prev1, next1) =>
        ({
          ...prev1, [next1]: Object.keys(aws[next1])
            .filter(name => name !== 'logicalName')
            .reduce((prev, key) => ({...prev, [key]: template.modify(aws[next1][key])}), {})
        })
      , {logicalName: logicalNameFunction} as any)
    const parameterFunctions = Object.keys(parameters).reduce((prev, parameter) => ({...prev, [parameter]: () => ({'Ref': parameter})}), {} as Params<T>)
    const outputs = builder({...builderAws, customResource: template.modify(customResource)}, parameterFunctions, ((condition, resource) => { (resource as any)._condition = condition; return resource; }));
    const envParams = Object.keys(parameters).reduce((prev, param) => {
      const parameter = parameters[param] as any;
      if(parameter.type === 'Future')
        return {...prev, [param]: {envName: parameter.environmentName!}}
      return prev;
    },{});
    const output: CloudFormationTemplate = {
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
      }, {} as CloudFormationTemplate['Parameters']),
      Resources: template.resources.reduce((prev, resource) => ({
        ...prev,
        [resource.logicalName!]: resource.template(),
      }), {} as CloudFormationTemplate['Resources']),
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
      }, {} as CloudFormationTemplate['Outputs']) : undefined
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