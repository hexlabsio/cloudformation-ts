import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type CacheClusterAttributes = { ConfigurationEndpointAddress: Attribute<string>;ConfigurationEndpointPort: Attribute<string>;RedisEndpointAddress: Attribute<string>;RedisEndpointPort: Attribute<string> }
export function cacheCluster(cacheClusterProps: CacheCluster): CacheCluster & {attributes: CacheClusterAttributes} { return ({ ...cacheClusterProps, _logicalType: 'AWS::ElastiCache::CacheCluster', attributes: { ConfigurationEndpointAddress: 'ConfigurationEndpoint.Address',ConfigurationEndpointPort: 'ConfigurationEndpoint.Port',RedisEndpointAddress: 'RedisEndpoint.Address',RedisEndpointPort: 'RedisEndpoint.Port' } }) }
   
export interface CacheCluster extends KloudResource {
  aZMode?: Value<string>
  autoMinorVersionUpgrade?: Value<boolean>
  cacheNodeType: Value<string>
  cacheParameterGroupName?: Value<string>
  cacheSecurityGroupNames?: Value<Value<string>[]>
  cacheSubnetGroupName?: Value<string>
  clusterName?: Value<string>
  engine: Value<string>
  engineVersion?: Value<string>
  notificationTopicArn?: Value<string>
  numCacheNodes: Value<number>
  port?: Value<number>
  preferredAvailabilityZone?: Value<string>
  preferredAvailabilityZones?: Value<Value<string>[]>
  preferredMaintenanceWindow?: Value<string>
  snapshotArns?: Value<Value<string>[]>
  snapshotName?: Value<string>
  snapshotRetentionLimit?: Value<number>
  snapshotWindow?: Value<string>
  tags?: Tag[]
  vpcSecurityGroupIds?: Value<Value<string>[]>
}