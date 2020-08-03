import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function clientVpnRoute(clientVpnRouteProps: ClientVpnRoute): ClientVpnRoute { return ({ ...clientVpnRouteProps, _logicalType: '' }) }
  
export interface ClientVpnRoute extends KloudResource {
  clientVpnEndpointId: Value<string>
  targetVpcSubnetId: Value<string>
  description?: Value<string>
  destinationCidrBlock: Value<string>
}