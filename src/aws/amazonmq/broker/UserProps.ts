import { Value } from '../../../kloudformation/Value';

export interface UserProps {
  username: Value<string>
  groups?: Value<Value<string>[]>
  consoleAccess?: Value<boolean>
  password: Value<string>
}