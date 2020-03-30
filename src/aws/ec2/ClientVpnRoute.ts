import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function clientVpnRoute(clientVpnRouteProps: ClientVpnRoute & { logicalName?: string }): ClientVpnRoute { return ({ ...clientVpnRouteProps, _logicalType: 'AWS::EC2::ClientVpnRoute' }) as unknown as ClientVpnRoute }

export interface ClientVpnRoute extends KloudResource {
    clientVpnEndpointId: Value<string>;
    targetVpcSubnetId: Value<string>;
    destinationCidrBlock: Value<string>;
    description?: Value<string>;
}