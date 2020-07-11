import {Attribute} from "./Attribute";
import {KloudResource} from "./KloudResource";

export type Ref = {
  'Ref': string
}
export type Join = {
  'Fn:Join': [string, Value<string>[]]
}

export type Value<T> = T | Ref | Attribute<T> | Join | KloudResource;

export function ref(logicalName: string): Ref {
  return {
    Ref: logicalName
  }
}

export function transform(part: Value<string>): Value<string> {
  if(typeof part === 'object' && Object.prototype.hasOwnProperty.call(part,'_logicalType')){
    return ref((part as KloudResource)._logicalName!)
  }
  return part;
}

export function join(...parts: Value<string>[]): Join {
  return joinWith('', ...parts);
}
export function joinWith(separator: string, ...parts: Value<string>[]): Join {
  const bits = parts.map(transform);
  return {
    'Fn:Join': [separator, bits]
  }
}


