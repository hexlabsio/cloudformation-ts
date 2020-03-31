import { ReplicationDestinationProps } from './ReplicationDestinationProps';
import { Value } from '../../../kloudformation/Value';
import { SourceSelectionCriteriaProps } from './SourceSelectionCriteriaProps';

export function replicationRuleProps(replicationRulePropsProps: ReplicationRuleProps): ReplicationRuleProps { return (replicationRulePropsProps) }

export interface ReplicationRuleProps {
    destination: ReplicationDestinationProps;
    prefix: Value<string>;
    status: Value<string>;
    id?: Value<string>;
    sourceSelectionCriteria?: SourceSelectionCriteriaProps;
}