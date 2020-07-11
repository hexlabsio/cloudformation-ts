import * as fs from "fs";
import {PathLike} from "fs";
import {KloudResource} from "./KloudResource";
import {aws as AWS} from "./aws";
import {transform, Value} from "./Value";

interface KloudFormationTemplate {
  Resources: {
    [logicalName: string]: {
      Type: string;
      Properties?: any;
    };
  };
}


export function normalize(name: string) {
  return name.split(/[^a-zA-Z]/g).reduce((prev, current) => `${prev}${current.substring(0,1).toUpperCase()}${current.substring(1)}`, '');
}

export class Template {
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
      const logicalName = Object.prototype.hasOwnProperty.call(resource, '_logicalName') ? resource._logicalName : this.logicalName(prefix);
      if(this.resources.find(it => it._logicalName === logicalName)) {
        throw Error(`Logical Name ${logicalName} for resource type ${resource._logicalType} is already being used, try updating it to something else.`);
      }
      const { attributes } = resource as any;
      const result  = {...resource, _logicalName: logicalName, attributes: Object.keys(attributes).reduce((prev, attribute) => ({...prev, [attribute]: {'Fn:GetAtt': [logicalName, attributes[attribute]]}}), {})};
      this.resources.push(result);
      return result
    }) as unknown as T;
  }
  
  private static capitalize<T extends any>(props: T): T | Value<string> {
    function caps(key: string): string { return key.substring(0,1).toUpperCase() + key.substring(1) }
    if(typeof props === 'object') {
      if(Array.isArray(props)){
        return props.map(Template.capitalize);
      }
      return transform(Object.keys(props).reduce((prev, key) => ({...prev, [caps(key)]: Template.capitalize(props[key])}), {} as T))
    }
    return props;
  }
  
  static create(builder: (aws: typeof AWS) => void, file?: PathLike): KloudFormationTemplate {
    const template = new Template();
    builder(Object.keys(AWS).reduce((prev, key) => Object.assign(prev, {[key]: template.modify((AWS as any)[key])}), {} as typeof AWS));
    const output = {
      Resources: (template.resources as any[]).reduce((prev, {_logicalName, _logicalType, attributes, ...properties}) => ({
        ...prev,
        [_logicalName!]: {
          Type: _logicalType!,
          ...(Object.keys(properties).length === 0 ? {} : { Properties: Template.capitalize(properties) })
        }
      }), {} as KloudFormationTemplate['Resources'])
    };
    if(file) {
      fs.writeFileSync(file, JSON.stringify(output, null, 2));
    }
    return output;
  }
}
