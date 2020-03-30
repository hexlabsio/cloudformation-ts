import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function transitGatewayRouteTableAssociation(transitGatewayRouteTableAssociationProps: TransitGatewayRouteTableAssociation & { logicalName?: string }): TransitGatewayRouteTableAssociation { return ({ ...transitGatewayRouteTableAssociationProps, _logicalType: 'AWS::EC2::TransitGatewayRouteTableAssociation' }) as unknown as TransitGatewayRouteTableAssociation }

export interface TransitGatewayRouteTableAssociation extends KloudResource {
    transitGatewayRouteTableId: Value<string>;
    transitGatewayAttachmentId: Value<string>;
}