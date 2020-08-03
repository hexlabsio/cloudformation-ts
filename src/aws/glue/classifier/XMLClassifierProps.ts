import { Value } from '../../../kloudformation/Value';

export interface XMLClassifierProps {
  rowTag: Value<string>
  classification: Value<string>
  name?: Value<string>
}