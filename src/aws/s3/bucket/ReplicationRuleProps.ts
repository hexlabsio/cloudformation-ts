import { DeleteMarkerReplicationProps } from './DeleteMarkerReplicationProps';
import { ReplicationDestinationProps } from './ReplicationDestinationProps';
import { ReplicationRuleFilterProps } from './ReplicationRuleFilterProps';
import { Value } from '../../../kloudformation/Value';
import { SourceSelectionCriteriaProps } from './SourceSelectionCriteriaProps';

export interface ReplicationRuleProps {
  deleteMarkerReplication?: DeleteMarkerReplicationProps
  destination: ReplicationDestinationProps
  filter?: ReplicationRuleFilterProps
  id?: Value<string>
  prefix?: Value<string>
  priority?: Value<number>
  sourceSelectionCriteria?: SourceSelectionCriteriaProps
  status: Value<string>
}