import { Value } from '../../../kloudformation/Value';

export interface BasicAuthConfigProps {
  username: Value<string>
  enableBasicAuth?: Value<boolean>
  password: Value<string>
}