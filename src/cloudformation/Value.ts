import {Attribute} from "./Attribute";
import { AwsResource } from './resources/AwsResource';

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
export type Condition = {
  Condition: string
}
export type ConditionAnd = {
  'Fn::And': [ConditionalValue, ConditionalValue]
}
export type ConditionOr = {
  'Fn::Or': [ConditionalValue, ConditionalValue]
}
export type ConditionEquals = {
  'Fn::Equals' : [ConditionalValue, ConditionalValue]
}
export type ConditionNot = {
  'Fn::Not' : [ConditionalValue]
}
export type ConditionIf = {
  'Fn::If' : [ConditionalValue, ConditionalValue, ConditionalValue]
}
export type ConditionalValue = Value<any> | ConditionFunction;
export type ConditionFunction = ConditionAnd | ConditionOr | ConditionEquals | ConditionNot | ConditionIf;

export type Instrinsic<T, S extends string> = Record<S, T>

export type Value<T> = T | Ref | Attribute<T> | Join | Sub | AwsResource<any, any, any> | Base64Fn | Cidr | Instrinsic<T, any>;

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
export function ref<R extends string = string>(logicalName: R): { Ref: R } {
  return {
    Ref: logicalName
  }
}

export function transform(part: Value<any>): Value<any> {
  if(part instanceof AwsResource){
    return ref(part.logicalName!);
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