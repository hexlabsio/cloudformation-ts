import { Value } from '../../kloudformation/Value';
import { NodeGroupConfigurationProps } from './replicationgroup/NodeGroupConfigurationProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type ReplicationGroupAttributes = { ConfigurationEndPointAddress: Attribute<string>; ConfigurationEndPointPort: Attribute<string>; PrimaryEndPointAddress: Attribute<string>; PrimaryEndPointPort: Attribute<string>; ReadEndPointAddresses: Attribute<string>; ReadEndPointAddressesList: Attribute<Value<string>[]>; ReadEndPointPorts: Attribute<string>; ReadEndPointPortsList: Attribute<Value<string>[]> }
export function replicationGroup(replicationGroupProps: ReplicationGroup): ReplicationGroup & { attributes: ReplicationGroupAttributes } { return ({ ...replicationGroupProps, _logicalType: 'AWS::ElastiCache::ReplicationGroup', attributes: { ConfigurationEndPointAddress: 'ConfigurationEndPoint.Address', ConfigurationEndPointPort: 'ConfigurationEndPoint.Port', PrimaryEndPointAddress: 'PrimaryEndPoint.Address', PrimaryEndPointPort: 'PrimaryEndPoint.Port', ReadEndPointAddresses: 'ReadEndPoint.Addresses', ReadEndPointAddressesList: 'ReadEndPoint.Addresses.List', ReadEndPointPorts: 'ReadEndPoint.Ports', ReadEndPointPortsList: 'ReadEndPoint.Ports.List' } }) }

export interface ReplicationGroup extends KloudResource {
    replicationGroupDescription: Value<string>;
    atRestEncryptionEnabled?: Value<boolean>;
    authToken?: Value<string>;
    autoMinorVersionUpgrade?: Value<boolean>;
    automaticFailoverEnabled?: Value<boolean>;
    cacheNodeType?: Value<string>;
    cacheParameterGroupName?: Value<string>;
    cacheSecurityGroupNames?: Value<Value<string>[]>;
    cacheSubnetGroupName?: Value<string>;
    engine?: Value<string>;
    engineVersion?: Value<string>;
    kmsKeyId?: Value<string>;
    nodeGroupConfiguration?: NodeGroupConfigurationProps[];
    notificationTopicArn?: Value<string>;
    numCacheClusters?: Value<number>;
    numNodeGroups?: Value<number>;
    port?: Value<number>;
    preferredCacheClusterAZs?: Value<Value<string>[]>;
    preferredMaintenanceWindow?: Value<string>;
    primaryClusterId?: Value<string>;
    replicasPerNodeGroup?: Value<number>;
    replicationGroupId?: Value<string>;
    securityGroupIds?: Value<Value<string>[]>;
    snapshotArns?: Value<Value<string>[]>;
    snapshotName?: Value<string>;
    snapshotRetentionLimit?: Value<number>;
    snapshotWindow?: Value<string>;
    snapshottingClusterId?: Value<string>;
    tags?: Tag[];
    transitEncryptionEnabled?: Value<boolean>;
}