import { Value } from '../../../kloudformation/Value';

export interface TmpfsProps {
  containerPath?: Value<string>
  mountOptions?: Value<Value<string>[]>
  size: Value<number>
}