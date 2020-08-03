import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { VpnTunnelOptionsSpecificationProps } from './vPNConnection/VpnTunnelOptionsSpecificationProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function vPNConnection(vPNConnectionProps: VPNConnection): VPNConnection { return ({ ...vPNConnectionProps, _logicalType: '' }) }
  
export interface VPNConnection extends KloudResource {
  customerGatewayId: Value<string>
  staticRoutesOnly?: Value<boolean>
  tags?: Tag[]
  transitGatewayId?: Value<string>
  type: Value<string>
  vpnGatewayId?: Value<string>
  vpnTunnelOptionsSpecifications?: VpnTunnelOptionsSpecificationProps[]
}