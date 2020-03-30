import { Value } from '../../../kloudformation/Value';

export function vpnTunnelOptionsSpecificationProps(vpnTunnelOptionsSpecificationPropsProps: VpnTunnelOptionsSpecificationProps): VpnTunnelOptionsSpecificationProps { return (vpnTunnelOptionsSpecificationPropsProps) as unknown as VpnTunnelOptionsSpecificationProps }

export interface VpnTunnelOptionsSpecificationProps {
    preSharedKey?: Value<string>;
    tunnelInsideCidr?: Value<string>;
}