import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function gatewayRouteTableAssociation(gatewayRouteTableAssociationProps: GatewayRouteTableAssociation & { logicalName?: string }): GatewayRouteTableAssociation { return ({ ...gatewayRouteTableAssociationProps, _logicalType: 'AWS::EC2::GatewayRouteTableAssociation' }) as unknown as GatewayRouteTableAssociation }

export interface GatewayRouteTableAssociation extends KloudResource {
    routeTableId: Value<string>;
    gatewayId: Value<string>;
}