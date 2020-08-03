import { Value } from '../../../kloudformation/Value';

export interface EntryProps {
  cidr: Value<string>
  description?: Value<string>
}