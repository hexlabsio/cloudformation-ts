import { Value } from '../../../kloudformation/Value';

export interface PatchFilterProps {
  values?: Value<Value<string>[]>
  key?: Value<string>
}