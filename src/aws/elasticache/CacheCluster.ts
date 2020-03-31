import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type CacheClusterAttributes = { ConfigurationEndpointAddress: Attribute<string>; ConfigurationEndpointPort: Attribute<string>; RedisEndpointAddress: Attribute<string>; RedisEndpointPort: Attribute<string> }
export function cacheCluster(cacheClusterProps: CacheCluster): CacheCluster & { attributes: CacheClusterAttributes } { return ({ ...cacheClusterProps, _logicalType: 'AWS::ElastiCache::CacheCluster', attributes: { ConfigurationEndpointAddress: 'ConfigurationEndpoint.Address', ConfigurationEndpointPort: 'ConfigurationEndpoint.Port', RedisEndpointAddress: 'RedisEndpoint.Address', RedisEndpointPort: 'RedisEndpoint.Port' } }) }

export interface CacheCluster extends KloudResource {
    cacheNodeType: Value<string>;
    engine: Value<string>;
    numCacheNodes: Value<number>;
    aZMode?: Value<string>;
    autoMinorVersionUpgrade?: Value<boolean>;
    cacheParameterGroupName?: Value<string>;
    cacheSecurityGroupNames?: Value<Value<string>[]>;
    cacheSubnetGroupName?: Value<string>;
    clusterName?: Value<string>;
    engineVersion?: Value<string>;
    notificationTopicArn?: Value<string>;
    port?: Value<number>;
    preferredAvailabilityZone?: Value<string>;
    preferredAvailabilityZones?: Value<Value<string>[]>;
    preferredMaintenanceWindow?: Value<string>;
    snapshotArns?: Value<Value<string>[]>;
    snapshotName?: Value<string>;
    snapshotRetentionLimit?: Value<number>;
    snapshotWindow?: Value<string>;
    tags?: Tag[];
    vpcSecurityGroupIds?: Value<Value<string>[]>;
}