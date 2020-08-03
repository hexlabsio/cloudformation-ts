import { Value } from '../../../kloudformation/Value';

export interface TagFilterProps {
  key?: Value<string>
  values?: Value<Value<string>[]>
}