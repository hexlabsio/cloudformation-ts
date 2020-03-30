import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function vPNGatewayRoutePropagation(vPNGatewayRoutePropagationProps: VPNGatewayRoutePropagation & { logicalName?: string }): VPNGatewayRoutePropagation { return ({ ...vPNGatewayRoutePropagationProps, _logicalType: 'AWS::EC2::VPNGatewayRoutePropagation' }) as unknown as VPNGatewayRoutePropagation }

export interface VPNGatewayRoutePropagation extends KloudResource {
    routeTableIds: Value<Value<string>[]>;
    vpnGatewayId: Value<string>;
}