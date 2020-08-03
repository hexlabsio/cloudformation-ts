import { Value } from '../../kloudformation/Value';
import { NodeGroupConfigurationProps } from './replicationGroup/NodeGroupConfigurationProps';
import { Tag } from '../Tag';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type ReplicationGroupAttributes = { ConfigurationEndPointAddress: Attribute<string>;ConfigurationEndPointPort: Attribute<string>;PrimaryEndPointAddress: Attribute<string>;PrimaryEndPointPort: Attribute<string>;ReadEndPointAddresses: Attribute<string>;ReadEndPointAddressesList: Attribute<string[]>;ReadEndPointPorts: Attribute<string>;ReadEndPointPortsList: Attribute<string[]>;ReaderEndPointAddress: Attribute<string>;ReaderEndPointPort: Attribute<string> }
export function replicationGroup(replicationGroupProps: ReplicationGroup): ReplicationGroup & {attributes: ReplicationGroupAttributes} { return ({ ...replicationGroupProps, _logicalType: 'AWS::ElastiCache::ReplicationGroup', attributes: { ConfigurationEndPointAddress: 'ConfigurationEndPoint.Address',ConfigurationEndPointPort: 'ConfigurationEndPoint.Port',PrimaryEndPointAddress: 'PrimaryEndPoint.Address',PrimaryEndPointPort: 'PrimaryEndPoint.Port',ReadEndPointAddresses: 'ReadEndPoint.Addresses',ReadEndPointAddressesList: 'ReadEndPoint.Addresses.List',ReadEndPointPorts: 'ReadEndPoint.Ports',ReadEndPointPortsList: 'ReadEndPoint.Ports.List',ReaderEndPointAddress: 'ReaderEndPoint.Address',ReaderEndPointPort: 'ReaderEndPoint.Port' } }) }
   
export interface ReplicationGroup extends KloudResource {
  atRestEncryptionEnabled?: Value<boolean>
  authToken?: Value<string>
  autoMinorVersionUpgrade?: Value<boolean>
  automaticFailoverEnabled?: Value<boolean>
  cacheNodeType?: Value<string>
  cacheParameterGroupName?: Value<string>
  cacheSecurityGroupNames?: Value<Value<string>[]>
  cacheSubnetGroupName?: Value<string>
  engine?: Value<string>
  engineVersion?: Value<string>
  kmsKeyId?: Value<string>
  multiAZEnabled?: Value<boolean>
  nodeGroupConfiguration?: NodeGroupConfigurationProps[]
  notificationTopicArn?: Value<string>
  numCacheClusters?: Value<number>
  numNodeGroups?: Value<number>
  port?: Value<number>
  preferredCacheClusterAZs?: Value<Value<string>[]>
  preferredMaintenanceWindow?: Value<string>
  primaryClusterId?: Value<string>
  replicasPerNodeGroup?: Value<number>
  replicationGroupDescription: Value<string>
  replicationGroupId?: Value<string>
  securityGroupIds?: Value<Value<string>[]>
  snapshotArns?: Value<Value<string>[]>
  snapshotName?: Value<string>
  snapshotRetentionLimit?: Value<number>
  snapshotWindow?: Value<string>
  snapshottingClusterId?: Value<string>
  tags?: Tag[]
  transitEncryptionEnabled?: Value<boolean>
}