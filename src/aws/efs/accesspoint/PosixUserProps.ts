import { Value } from '../../../kloudformation/Value';

export interface PosixUserProps {
  uid: Value<string>
  gid: Value<string>
  secondaryGids?: Value<Value<string>[]>
}