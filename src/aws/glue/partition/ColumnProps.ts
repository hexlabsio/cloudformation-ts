import { Value } from '../../../kloudformation/Value';

export interface ColumnProps {
  comment?: Value<string>
  type?: Value<string>
  name: Value<string>
}