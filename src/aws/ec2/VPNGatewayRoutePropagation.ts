import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type VPNGatewayRoutePropagationAttributes = {  }
export function vPNGatewayRoutePropagation(vPNGatewayRoutePropagationProps: VPNGatewayRoutePropagation): VPNGatewayRoutePropagation & { attributes: VPNGatewayRoutePropagationAttributes } { return ({ ...vPNGatewayRoutePropagationProps, _logicalType: 'AWS::EC2::VPNGatewayRoutePropagation', attributes: {  } }) }

export interface VPNGatewayRoutePropagation extends KloudResource {
    routeTableIds: Value<Value<string>[]>;
    vpnGatewayId: Value<string>;
}