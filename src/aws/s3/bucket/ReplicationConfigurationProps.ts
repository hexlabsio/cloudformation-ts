import { Value } from '../../../kloudformation/Value';
import { ReplicationRuleProps } from './ReplicationRuleProps';

export function replicationConfigurationProps(replicationConfigurationPropsProps: ReplicationConfigurationProps): ReplicationConfigurationProps { return (replicationConfigurationPropsProps) as unknown as ReplicationConfigurationProps }

export interface ReplicationConfigurationProps {
    role: Value<string>;
    rules: ReplicationRuleProps[];
}