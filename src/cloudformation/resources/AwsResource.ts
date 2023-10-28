import { CloudFormationTemplate } from '../template/cloudformation-template';
import { ref, Value } from '../Value';

export class AwsResource<T extends string, R extends Record<string, any>, A = undefined>{
  logicalName?: string;
  condition?: string;
  dependsOn?: (AwsResource<any, any, any> | string)[];
  deletionPolicy?: CloudFormationTemplate['Resources'][string]['DeletionPolicy'];
  constructor(public type: T, public properties: R,public attributes: A = undefined as A) {
  }

  withLogicalName(logicalName: string): this {
    this.logicalName = logicalName;
    return this;
  }
  withCondition(condition: string): this {
    this.condition = condition;
    return this;
  }
  withDependency(...dependsOn: (AwsResource<any, any, any> | string)[]): this {
    this.dependsOn = dependsOn;
    return this;
  }

  withDeletionPolicy(deletionPolicy: CloudFormationTemplate['Resources'][string]['DeletionPolicy']): this {
    this.deletionPolicy = deletionPolicy;
    return this;
  }

  private static capitalize<T>(props: T): T | Value<string> {
    function caps(key: string): string { return key.substring(0,1).toUpperCase() + key.substring(1) }
    if(typeof props === 'object') {
      if(Array.isArray(props)){
        return props.map(AwsResource.capitalize) as any;
      }
      if(props?.['_nocaps'] !== undefined) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const {_nocaps, ...rest} = props as any;
        return rest;
      }
      if(props instanceof AwsResource){
        return ref(props.logicalName!);
      }
      return Object.keys(props as any).reduce((prev, key) => ({...prev, [caps(key)]: AwsResource.capitalize(props?.[key])}), {} as any);
    }
    return props;
  }

  template(): CloudFormationTemplate['Resources'][string] {
    return {
      Type: this.type,
      ...(this.deletionPolicy ? { 'DeletionPolicy': this.deletionPolicy }: {}),
      ...(this.condition ? { 'Condition': this.condition }: {}),
      ...(this.dependsOn ? {
        DependsOn: this.dependsOn
          .map(it => it instanceof AwsResource ? it.logicalName! : it)
      } : {}),
      ...(Object.keys(this.properties).length === 0 ? {} : { Properties: AwsResource.capitalize(this.properties) })
    }
  }
  disableLowerCase(): AwsResource<T, R, A> {
    this.properties = {...this.properties, _nocaps: true};
    return this;
  }
}