import { Value } from '../../../kloudformation/Value';

export interface FieldProps {
  key: Value<string>
  refValue?: Value<string>
  stringValue?: Value<string>
}