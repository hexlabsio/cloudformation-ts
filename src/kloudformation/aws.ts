import {resources} from './aws-resources';
import { TemplateBuilder } from './kloudformation';

type AwsServiceList = (typeof resources)['aws'];
export type AwsServices = keyof AwsServiceList;

class Builder<AWS> {
  constructor(private readonly aws: AWS) {
  }
  create<C extends string = string>(outputFileName = 'template.json', parametersFileName='parameters.json'): TemplateBuilder<AWS, {}, C> {
    return TemplateBuilder.create(this.aws, outputFileName, parametersFileName);
  }
}

type Get<T extends {[key: string]: { load: () => Promise<any> }}> = {[K in keyof T]: T[K]['load'] extends () => Promise<infer R> ? R : never}
export type AWSResourceFor<S extends AwsServices> = { [k in S]: Get<(typeof resources)['aws'][k]> } & { logicalName(prefix: string): string; }

export class AwsLoader<AWS> {
  aws = {};
  private promises: Promise<void>[] = [];

  private async add(service: AwsServices) {
    const parts = await Promise.all(Object.keys(resources.aws[service]).map(async resource => ({[resource]: await resources.aws[service][resource].load()})));
    this.aws = { ...this.aws, [service]: parts.reduce((prev, next) => ({...prev, ...next}), {}) };
  }
  register<S extends AwsServices[]>(...service: S): AwsLoader<AWS & AWSResourceFor<S[number]>> {
    this.promises.push(...service.map(it => this.add(it)));
    return this as any;
  }

  static register<S extends AwsServices[]>(...resource: S): AwsLoader<{ [k in S[number]]: Get<(typeof resources)['aws'][k]> }> {
    return new AwsLoader<any>().register(...resource);
  }

  async load(): Promise<Builder<AWS>> {
    await Promise.all(this.promises);
    return new Builder<any>(this.aws);
  }
}