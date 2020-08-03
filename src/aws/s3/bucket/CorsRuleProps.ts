import { Value } from '../../../kloudformation/Value';

export interface CorsRuleProps {
  allowedHeaders?: Value<Value<string>[]>
  allowedMethods: Value<Value<string>[]>
  allowedOrigins: Value<Value<string>[]>
  exposedHeaders?: Value<Value<string>[]>
  id?: Value<string>
  maxAge?: Value<number>
}