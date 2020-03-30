import { Value } from '../../kloudformation/Value';
import { NodeGroupConfigurationProps } from './replicationgroup/NodeGroupConfigurationProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function replicationGroup(replicationGroupProps: ReplicationGroup & { logicalName?: string }): ReplicationGroup { return ({ ...replicationGroupProps, _logicalType: 'AWS::ElastiCache::ReplicationGroup' }) as unknown as ReplicationGroup }

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