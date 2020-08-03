import { Value } from '../../../kloudformation/Value';

export interface TargetProps {
  key: Value<string>
  values: Value<Value<string>[]>
}