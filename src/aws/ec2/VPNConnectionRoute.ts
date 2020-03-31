import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type VPNConnectionRouteAttributes = {  }
export function vPNConnectionRoute(vPNConnectionRouteProps: VPNConnectionRoute): VPNConnectionRoute & { attributes: VPNConnectionRouteAttributes } { return ({ ...vPNConnectionRouteProps, _logicalType: 'AWS::EC2::VPNConnectionRoute', attributes: {  } }) }

export interface VPNConnectionRoute extends KloudResource {
    destinationCidrBlock: Value<string>;
    vpnConnectionId: Value<string>;
}