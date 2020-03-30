import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function vPNConnectionRoute(vPNConnectionRouteProps: VPNConnectionRoute & { logicalName?: string }): VPNConnectionRoute { return ({ ...vPNConnectionRouteProps, _logicalType: 'AWS::EC2::VPNConnectionRoute' }) as unknown as VPNConnectionRoute }

export interface VPNConnectionRoute extends KloudResource {
    destinationCidrBlock: Value<string>;
    vpnConnectionId: Value<string>;
}