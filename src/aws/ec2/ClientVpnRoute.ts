import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type ClientVpnRouteAttributes = {  }
export function clientVpnRoute(clientVpnRouteProps: ClientVpnRoute): ClientVpnRoute & { attributes: ClientVpnRouteAttributes } { return ({ ...clientVpnRouteProps, _logicalType: 'AWS::EC2::ClientVpnRoute', attributes: {  } }) }

export interface ClientVpnRoute extends KloudResource {
    clientVpnEndpointId: Value<string>;
    targetVpcSubnetId: Value<string>;
    destinationCidrBlock: Value<string>;
    description?: Value<string>;
}