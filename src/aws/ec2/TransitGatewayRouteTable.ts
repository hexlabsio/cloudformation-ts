import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function transitGatewayRouteTable(transitGatewayRouteTableProps: TransitGatewayRouteTable & { logicalName?: string }): TransitGatewayRouteTable { return ({ ...transitGatewayRouteTableProps, _logicalType: 'AWS::EC2::TransitGatewayRouteTable' }) as unknown as TransitGatewayRouteTable }

export interface TransitGatewayRouteTable extends KloudResource {
    transitGatewayId: Value<string>;
    tags?: Tag[];
}