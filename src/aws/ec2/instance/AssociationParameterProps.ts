import { Value } from '../../../kloudformation/Value';

export interface AssociationParameterProps {
  key: Value<string>
  value: Value<Value<string>[]>
}