import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type TransitGatewayRouteTablePropagationAttributes = {  }
export function transitGatewayRouteTablePropagation(transitGatewayRouteTablePropagationProps: TransitGatewayRouteTablePropagation): TransitGatewayRouteTablePropagation & { attributes: TransitGatewayRouteTablePropagationAttributes } { return ({ ...transitGatewayRouteTablePropagationProps, _logicalType: 'AWS::EC2::TransitGatewayRouteTablePropagation', attributes: {  } }) }

export interface TransitGatewayRouteTablePropagation extends KloudResource {
    transitGatewayRouteTableId: Value<string>;
    transitGatewayAttachmentId: Value<string>;
}