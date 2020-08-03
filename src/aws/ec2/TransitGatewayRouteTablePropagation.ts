import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function transitGatewayRouteTablePropagation(transitGatewayRouteTablePropagationProps: TransitGatewayRouteTablePropagation): TransitGatewayRouteTablePropagation { return ({ ...transitGatewayRouteTablePropagationProps, _logicalType: '' }) }
  
export interface TransitGatewayRouteTablePropagation extends KloudResource {
  transitGatewayRouteTableId: Value<string>
  transitGatewayAttachmentId: Value<string>
}