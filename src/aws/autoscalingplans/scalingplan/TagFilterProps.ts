import { Value } from '../../../kloudformation/Value';

export interface TagFilterProps {
  values?: Value<Value<string>[]>
  key: Value<string>
}