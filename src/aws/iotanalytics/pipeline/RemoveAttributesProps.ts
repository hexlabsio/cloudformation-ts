import { Value } from '../../../kloudformation/Value';

export interface RemoveAttributesProps {
  next?: Value<string>
  attributes?: Value<Value<string>[]>
  name?: Value<string>
}