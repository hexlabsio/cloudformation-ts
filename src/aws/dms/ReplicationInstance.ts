import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type ReplicationInstanceAttributes = { ReplicationInstancePublicIpAddresses: Attribute<string[]>;ReplicationInstancePrivateIpAddresses: Attribute<string[]> }
export function replicationInstance(replicationInstanceProps: ReplicationInstance): ReplicationInstance & {attributes: ReplicationInstanceAttributes} { return ({ ...replicationInstanceProps, _logicalType: 'AWS::DMS::ReplicationInstance', attributes: { ReplicationInstancePublicIpAddresses: 'ReplicationInstancePublicIpAddresses',ReplicationInstancePrivateIpAddresses: 'ReplicationInstancePrivateIpAddresses' } }) }
   
export interface ReplicationInstance extends KloudResource {
  replicationInstanceIdentifier?: Value<string>
  engineVersion?: Value<string>
  kmsKeyId?: Value<string>
  availabilityZone?: Value<string>
  preferredMaintenanceWindow?: Value<string>
  autoMinorVersionUpgrade?: Value<boolean>
  replicationSubnetGroupIdentifier?: Value<string>
  allocatedStorage?: Value<number>
  vpcSecurityGroupIds?: Value<Value<string>[]>
  allowMajorVersionUpgrade?: Value<boolean>
  replicationInstanceClass: Value<string>
  publiclyAccessible?: Value<boolean>
  multiAZ?: Value<boolean>
  tags?: Tag[]
}