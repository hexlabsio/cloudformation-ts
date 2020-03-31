import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export type TransitGatewayRouteTableAttributes = {  }
export function transitGatewayRouteTable(transitGatewayRouteTableProps: TransitGatewayRouteTable): TransitGatewayRouteTable & { attributes: TransitGatewayRouteTableAttributes } { return ({ ...transitGatewayRouteTableProps, _logicalType: 'AWS::EC2::TransitGatewayRouteTable', attributes: {  } }) }

export interface TransitGatewayRouteTable extends KloudResource {
    transitGatewayId: Value<string>;
    tags?: Tag[];
}