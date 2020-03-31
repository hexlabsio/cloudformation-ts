import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type LocalGatewayRouteAttributes = { State: Attribute<string>; Type: Attribute<string> }
export function localGatewayRoute(localGatewayRouteProps: LocalGatewayRoute): LocalGatewayRoute & { attributes: LocalGatewayRouteAttributes } { return ({ ...localGatewayRouteProps, _logicalType: 'AWS::EC2::LocalGatewayRoute', attributes: { State: 'State', Type: 'Type' } }) }

export interface LocalGatewayRoute extends KloudResource {
    destinationCidrBlock: Value<string>;
    localGatewayRouteTableId: Value<string>;
    localGatewayVirtualInterfaceGroupId: Value<string>;
}