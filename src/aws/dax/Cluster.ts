import { Value } from '../../kloudformation/Value';
import { SSESpecificationProps } from './cluster/SSESpecificationProps';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type ClusterAttributes = { ClusterDiscoveryEndpoint: Attribute<string>; Arn: Attribute<string> }
export function cluster(clusterProps: Cluster): Cluster & { attributes: ClusterAttributes } { return ({ ...clusterProps, _logicalType: 'AWS::DAX::Cluster', attributes: { ClusterDiscoveryEndpoint: 'ClusterDiscoveryEndpoint', Arn: 'Arn' } }) }

export interface Cluster extends KloudResource {
    replicationFactor: Value<number>;
    iAMRoleARN: Value<string>;
    nodeType: Value<string>;
    sSESpecification?: SSESpecificationProps;
    description?: Value<string>;
    parameterGroupName?: Value<string>;
    availabilityZones?: Value<Value<string>[]>;
    subnetGroupName?: Value<string>;
    preferredMaintenanceWindow?: Value<string>;
    notificationTopicARN?: Value<string>;
    securityGroupIds?: Value<Value<string>[]>;
    clusterName?: Value<string>;
    tags?: Value<any>;
}