import { Value } from '../../../kloudformation/Value';
import { TagFilterProps } from './TagFilterProps';

export interface QueryProps {
  resourceTypeFilters?: Value<Value<string>[]>
  stackIdentifier?: Value<string>
  tagFilters?: TagFilterProps[]
}