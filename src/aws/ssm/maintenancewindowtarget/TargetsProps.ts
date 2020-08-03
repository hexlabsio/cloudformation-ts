import { Value } from '../../../kloudformation/Value';

export interface TargetsProps {
  values?: Value<Value<string>[]>
  key: Value<string>
}