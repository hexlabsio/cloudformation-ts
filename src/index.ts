// import * as info from "./info.json";
// import {generate} from "./kloudformation/builder/generator";
// generate(info);

import {KloudResource} from "./kloudformation/KloudResource";
import {aws as AWS} from "./kloudformation/template";


interface KloudFormationTemplate {
  Resources: {
    [logicalName: string]: {
      Type: string;
      Properties: any;
    };
  };
}

class Template {
  private logicalNames: string[] = [];

  resources: KloudResource[] = [];

  private logicalName(prefix: string): string {
    const prefixed = this.logicalNames.filter(it => it.startsWith(prefix));
    if(prefixed.length === 0){
      this.logicalNames.push(prefix);
      return prefix;
    } else {
      let index = prefixed.length + 1;
      while(this.logicalNames.find(it => it === prefix + index)) {
        index ++;
      }
      this.logicalNames.push(prefix + index);
      return prefix + index;
    }
  }

  private modify<T extends Function>(a: T): T {
    return ((...args: any) => {
      const resource: KloudResource = a(...args);
      const prefix = resource._logicalType!.replace(/::/g, '.').split('.').pop()!;
      const logicalName = Object.prototype.hasOwnProperty.call(resource, 'logicalName') ? resource.logicalName : this.logicalName(prefix);
      if(this.resources.find(it => it.logicalName === logicalName)) {
        throw Error(`Logical Name ${logicalName} for resource type ${resource._logicalType} is already being used, try updating it to something else.`);
      }
      const { attributes, ... actualResource } = resource as any;
      this.resources.push({ ...actualResource, logicalName });
      return {...resource, attributes: Object.keys(attributes).reduce((prev, attribute) => ({...prev, [attribute]: {'Fn:GetAtt': [logicalName, attributes[attribute]]}}), {})};
    }) as unknown as T;
  }

  private static capitalize<T extends any>(props: T): T {
    function caps(key: string): string { return key.substring(0,1).toUpperCase() + key.substring(1) }
    if(typeof props === 'object') {
      if(Array.isArray(props)){
        return props.map(Template.capitalize);
      }
      return Object.keys(props).reduce((prev, key) => ({...prev, [caps(key)]: Template.capitalize(props[key])}), {} as T)
    }
    return props;
  }

  static create(builder: (aws: typeof AWS) => void): KloudFormationTemplate {
    const template = new Template();
    builder(Object.keys(AWS).reduce((prev, key) => Object.assign(prev, {[key]: template.modify((AWS as any)[key])}), {} as typeof AWS));
    return {
      Resources: template.resources.reduce((prev, {logicalName, _logicalType, ...properties}) => ({
        ...prev,
        [logicalName!]: {
          Type: _logicalType!,
          Properties: Template.capitalize(properties)
        }
      }), {} as KloudFormationTemplate['Resources'])
    };
  }
}

function template() {
  const t = Template.create( aws => {
    const t1 = aws.dynamodbTable({
      keySchema: [{keyType: 'HASH', attributeName: 'awsAccountId'}, {keyType: 'RANGE', attributeName: 'lineItemId'}],
      tableName: `klouds-billing-line-items-${process.env.ABC}`
    });
    console.log(t1);
    aws.dynamodbTable({
      keySchema: [{keyType: 'HASH', attributeName: 'awsAccountId'}, {keyType: 'RANGE', attributeName: 'lineItemId'}],
      tableName: t1.attributes.Arn
    });
    aws.dynamodbTable({
      keySchema: [{keyType: 'HASH', attributeName: 'awsAccountId'}, {keyType: 'RANGE', attributeName: 'lineItemId'}],
      tableName: `klouds-billing-line-items-${process.env.ABC}`
    });
  });
  console.log(JSON.stringify(t, null, 2));
}
template();
