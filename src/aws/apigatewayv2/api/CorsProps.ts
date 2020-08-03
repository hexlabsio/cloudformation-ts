import { Value } from '../../../kloudformation/Value';

export interface CorsProps {
  allowOrigins?: Value<Value<string>[]>
  allowCredentials?: Value<boolean>
  exposeHeaders?: Value<Value<string>[]>
  allowHeaders?: Value<Value<string>[]>
  maxAge?: Value<number>
  allowMethods?: Value<Value<string>[]>
}