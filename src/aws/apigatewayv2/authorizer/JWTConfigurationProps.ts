import { Value } from '../../../kloudformation/Value';

export interface JWTConfigurationProps {
  issuer?: Value<string>
  audience?: Value<Value<string>[]>
}