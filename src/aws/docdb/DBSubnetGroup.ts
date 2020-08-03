import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
export function dBSubnetGroup(dBSubnetGroupProps: DBSubnetGroup): DBSubnetGroup { return ({ ...dBSubnetGroupProps, _logicalType: '' }) }
  
export interface DBSubnetGroup extends KloudResource {
  dBSubnetGroupName?: Value<string>
  dBSubnetGroupDescription: Value<string>
  subnetIds: Value<Value<string>[]>
  tags?: Tag[]
}