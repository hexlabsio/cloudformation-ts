import { Tag } from '../Tag';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function routeTable(routeTableProps: RouteTable): RouteTable { return ({ ...routeTableProps, _logicalType: '' }) }
  
export interface RouteTable extends KloudResource {
  tags?: Tag[]
  vpcId: Value<string>
}