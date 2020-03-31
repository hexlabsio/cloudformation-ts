import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { VpnTunnelOptionsSpecificationProps } from './vpnconnection/VpnTunnelOptionsSpecificationProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type VPNConnectionAttributes = {  }
export function vPNConnection(vPNConnectionProps: VPNConnection): VPNConnection & { attributes: VPNConnectionAttributes } { return ({ ...vPNConnectionProps, _logicalType: 'AWS::EC2::VPNConnection', attributes: {  } }) }

export interface VPNConnection extends KloudResource {
    customerGatewayId: Value<string>;
    type: Value<string>;
    staticRoutesOnly?: Value<boolean>;
    tags?: Tag[];
    transitGatewayId?: Value<string>;
    vpnGatewayId?: Value<string>;
    vpnTunnelOptionsSpecifications?: VpnTunnelOptionsSpecificationProps[];
}