import { Value } from '../../../kloudformation/Value';

export interface TargetProps {
  values?: Value<Value<string>[]>
  key: Value<string>
}