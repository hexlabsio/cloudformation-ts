import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function vPNConnectionRoute(vPNConnectionRouteProps: VPNConnectionRoute): VPNConnectionRoute { return ({ ...vPNConnectionRouteProps, _logicalType: '' }) }
  
export interface VPNConnectionRoute extends KloudResource {
  destinationCidrBlock: Value<string>
  vpnConnectionId: Value<string>
}