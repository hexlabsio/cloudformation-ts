import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function transitGatewayRouteTablePropagation(transitGatewayRouteTablePropagationProps: TransitGatewayRouteTablePropagation & { logicalName?: string }): TransitGatewayRouteTablePropagation { return ({ ...transitGatewayRouteTablePropagationProps, _logicalType: 'AWS::EC2::TransitGatewayRouteTablePropagation' }) as unknown as TransitGatewayRouteTablePropagation }

export interface TransitGatewayRouteTablePropagation extends KloudResource {
    transitGatewayRouteTableId: Value<string>;
    transitGatewayAttachmentId: Value<string>;
}