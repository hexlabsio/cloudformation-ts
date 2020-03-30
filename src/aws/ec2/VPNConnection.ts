import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { VpnTunnelOptionsSpecificationProps } from './vpnconnection/VpnTunnelOptionsSpecificationProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function vPNConnection(vPNConnectionProps: VPNConnection & { logicalName?: string }): VPNConnection { return ({ ...vPNConnectionProps, _logicalType: 'AWS::EC2::VPNConnection' }) as unknown as VPNConnection }

export interface VPNConnection extends KloudResource {
    customerGatewayId: Value<string>;
    type: Value<string>;
    staticRoutesOnly?: Value<boolean>;
    tags?: Tag[];
    transitGatewayId?: Value<string>;
    vpnGatewayId?: Value<string>;
    vpnTunnelOptionsSpecifications?: VpnTunnelOptionsSpecificationProps[];
}