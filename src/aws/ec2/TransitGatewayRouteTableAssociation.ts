import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function transitGatewayRouteTableAssociation(transitGatewayRouteTableAssociationProps: TransitGatewayRouteTableAssociation): TransitGatewayRouteTableAssociation { return ({ ...transitGatewayRouteTableAssociationProps, _logicalType: '' }) }
  
export interface TransitGatewayRouteTableAssociation extends KloudResource {
  transitGatewayRouteTableId: Value<string>
  transitGatewayAttachmentId: Value<string>
}