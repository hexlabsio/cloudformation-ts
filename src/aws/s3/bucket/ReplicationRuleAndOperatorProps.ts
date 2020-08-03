import { Value } from '../../../kloudformation/Value';
import { TagFilterProps } from './TagFilterProps';

export interface ReplicationRuleAndOperatorProps {
  prefix?: Value<string>
  tagFilters?: TagFilterProps[]
}