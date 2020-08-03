import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
export function transitGatewayRouteTable(transitGatewayRouteTableProps: TransitGatewayRouteTable): TransitGatewayRouteTable { return ({ ...transitGatewayRouteTableProps, _logicalType: '' }) }
  
export interface TransitGatewayRouteTable extends KloudResource {
  transitGatewayId: Value<string>
  tags?: Tag[]
}