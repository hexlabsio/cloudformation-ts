import fs from 'fs';
import { CloudFormationTemplate } from './cloudformation-template';
import { Outputs } from './outputs';
import { Parameter } from './parameter';
import { BuilderWith, TemplateCreator } from './template-creator';


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

export class TemplateBuilder<AWS, P extends {[param: string]: Parameter}, C extends string = string> {
  private parameters: {[param: string]: Parameter} = {};
  private outputDir = '';
  private conditions: Record<string, any> = {};
  private _templateTransform: (template: CloudFormationTemplate) => string = template => JSON.stringify(template, null, 2);
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

  transformTemplate(_templateTransform: (template: CloudFormationTemplate) => string = template => JSON.stringify(template, null, 2)): this {
    this._templateTransform = _templateTransform;
    return this;
  }

  private pathTo(file: string): string {
    if(this.outputDir) {
      fs.mkdirSync(this.outputDir, {recursive: true});
    }
    return (this.outputDir ? this.outputDir + '/' : '') + file;
  }

  build(builder: BuilderWith<AWS, P, C>): {template: CloudFormationTemplate; outputs?: Outputs} {
    return TemplateCreator.createWithParams<AWS, P, C>(this.aws, (this.parameters ?? {}) as any,
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
