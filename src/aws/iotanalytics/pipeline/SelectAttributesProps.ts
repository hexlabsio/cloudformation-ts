import { Value } from '../../../kloudformation/Value';

export interface SelectAttributesProps {
  next?: Value<string>
  attributes?: Value<Value<string>[]>
  name?: Value<string>
}