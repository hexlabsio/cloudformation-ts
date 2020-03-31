import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type TransitGatewayRouteTableAssociationAttributes = {  }
export function transitGatewayRouteTableAssociation(transitGatewayRouteTableAssociationProps: TransitGatewayRouteTableAssociation): TransitGatewayRouteTableAssociation & { attributes: TransitGatewayRouteTableAssociationAttributes } { return ({ ...transitGatewayRouteTableAssociationProps, _logicalType: 'AWS::EC2::TransitGatewayRouteTableAssociation', attributes: {  } }) }

export interface TransitGatewayRouteTableAssociation extends KloudResource {
    transitGatewayRouteTableId: Value<string>;
    transitGatewayAttachmentId: Value<string>;
}