import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
export function replicationSubnetGroup(replicationSubnetGroupProps: ReplicationSubnetGroup): ReplicationSubnetGroup { return ({ ...replicationSubnetGroupProps, _logicalType: '' }) }
  
export interface ReplicationSubnetGroup extends KloudResource {
  replicationSubnetGroupDescription: Value<string>
  replicationSubnetGroupIdentifier?: Value<string>
  subnetIds: Value<Value<string>[]>
  tags?: Tag[]
}