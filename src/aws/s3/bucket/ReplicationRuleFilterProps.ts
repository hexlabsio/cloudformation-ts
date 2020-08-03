import { ReplicationRuleAndOperatorProps } from './ReplicationRuleAndOperatorProps';
import { Value } from '../../../kloudformation/Value';
import { TagFilterProps } from './TagFilterProps';

export interface ReplicationRuleFilterProps {
  and?: ReplicationRuleAndOperatorProps
  prefix?: Value<string>
  tagFilter?: TagFilterProps
}