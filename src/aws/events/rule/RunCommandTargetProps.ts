import { Value } from '../../../kloudformation/Value';

export interface RunCommandTargetProps {
  key: Value<string>
  values: Value<Value<string>[]>
}