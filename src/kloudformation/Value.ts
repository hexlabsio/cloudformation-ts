import {Attribute} from "./Attribute";
import {KloudResource} from "./KloudResource";

export type Ref = {
  'Ref': string;
}
export type Join = {
  'Fn::Join': [string, Value<string>[]];
}
export type Sub = {
  'Fn::Sub': [string, Record<string, Value<string>[]>];
}
export type Base64Fn = {
  'Fn::Base64': Value<string>;
}
export type Cidr = {
  'Fn::Cidr': [Value<string>, Value<number>, Value<number>]
}

export type Instrinsic<T, S extends string> = Record<S, T>

export type Value<T> = T | Ref | Attribute<T> | Join | Sub | KloudResource | Base64Fn | Cidr | Instrinsic<T, any>;

type SubParams<T extends string> =
  T extends `${infer Start}\${${infer SubParam}}${infer Rest}`
    ? {[k in SubParam | keyof SubParams<Rest>] : Value<string> }
    : T extends `${infer Start}\${${infer SubParam}}`
      ? {[k in SubParam]: Value<string>}
      : {};

export function sub<T extends string>(body: T, params: SubParams<T>): Sub {
  return {
    "Fn::Sub": [body, params]
  }
}
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
    'Fn::Join': [separator, bits]
  }
}


