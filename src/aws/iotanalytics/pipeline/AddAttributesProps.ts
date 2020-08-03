import { Value } from '../../../kloudformation/Value';

export interface AddAttributesProps {
  next?: Value<string>
  attributes?: Value<any>
  name?: Value<string>
}