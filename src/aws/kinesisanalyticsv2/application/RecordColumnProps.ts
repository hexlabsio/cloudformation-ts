import { Value } from '../../../kloudformation/Value';

export interface RecordColumnProps {
  mapping?: Value<string>
  sqlType: Value<string>
  name: Value<string>
}