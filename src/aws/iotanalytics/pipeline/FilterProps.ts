import { Value } from '../../../kloudformation/Value';

export interface FilterProps {
  filter?: Value<string>
  next?: Value<string>
  name?: Value<string>
}