import { Value } from '../../../kloudformation/Value';

export function nodeGroupConfigurationProps(nodeGroupConfigurationPropsProps: NodeGroupConfigurationProps): NodeGroupConfigurationProps { return (nodeGroupConfigurationPropsProps) }

export interface NodeGroupConfigurationProps {
    nodeGroupId?: Value<string>;
    primaryAvailabilityZone?: Value<string>;
    replicaAvailabilityZones?: Value<Value<string>[]>;
    replicaCount?: Value<number>;
    slots?: Value<string>;
}