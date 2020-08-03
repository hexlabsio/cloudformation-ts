import { Value } from '../../../kloudformation/Value';

export interface DataResourceProps {
  type: Value<string>
  values?: Value<Value<string>[]>
}