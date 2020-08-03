import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
export function dBClusterParameterGroup(dBClusterParameterGroupProps: DBClusterParameterGroup): DBClusterParameterGroup { return ({ ...dBClusterParameterGroupProps, _logicalType: '' }) }
  
export interface DBClusterParameterGroup extends KloudResource {
  description: Value<string>
  parameters: Value<any>
  family: Value<string>
  tags?: Tag[]
  name?: Value<string>
}