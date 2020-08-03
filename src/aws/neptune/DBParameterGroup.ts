import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
export function dBParameterGroup(dBParameterGroupProps: DBParameterGroup): DBParameterGroup { return ({ ...dBParameterGroupProps, _logicalType: '' }) }
  
export interface DBParameterGroup extends KloudResource {
  description: Value<string>
  parameters: Value<any>
  family: Value<string>
  tags?: Tag[]
  name?: Value<string>
}