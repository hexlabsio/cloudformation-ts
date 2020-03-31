import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type GatewayRouteTableAssociationAttributes = { AssociationId: Attribute<string> }
export function gatewayRouteTableAssociation(gatewayRouteTableAssociationProps: GatewayRouteTableAssociation): GatewayRouteTableAssociation & { attributes: GatewayRouteTableAssociationAttributes } { return ({ ...gatewayRouteTableAssociationProps, _logicalType: 'AWS::EC2::GatewayRouteTableAssociation', attributes: { AssociationId: 'AssociationId' } }) }

export interface GatewayRouteTableAssociation extends KloudResource {
    routeTableId: Value<string>;
    gatewayId: Value<string>;
}