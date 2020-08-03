import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function vPNGatewayRoutePropagation(vPNGatewayRoutePropagationProps: VPNGatewayRoutePropagation): VPNGatewayRoutePropagation { return ({ ...vPNGatewayRoutePropagationProps, _logicalType: '' }) }
  
export interface VPNGatewayRoutePropagation extends KloudResource {
  routeTableIds: Value<Value<string>[]>
  vpnGatewayId: Value<string>
}