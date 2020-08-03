import { Value } from '../../../kloudformation/Value';

export interface CookiesProps {
  whitelistedNames?: Value<Value<string>[]>
  forward: Value<string>
}