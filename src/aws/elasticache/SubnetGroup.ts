import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function subnetGroup(subnetGroupProps: SubnetGroup): SubnetGroup { return ({ ...subnetGroupProps, _logicalType: '' }) }
  
export interface SubnetGroup extends KloudResource {
  cacheSubnetGroupName?: Value<string>
  description: Value<string>
  subnetIds: Value<Value<string>[]>
}