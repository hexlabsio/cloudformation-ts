import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
export function clusterSubnetGroup(clusterSubnetGroupProps: ClusterSubnetGroup): ClusterSubnetGroup { return ({ ...clusterSubnetGroupProps, _logicalType: '' }) }
  
export interface ClusterSubnetGroup extends KloudResource {
  description: Value<string>
  subnetIds: Value<Value<string>[]>
  tags?: Tag[]
}