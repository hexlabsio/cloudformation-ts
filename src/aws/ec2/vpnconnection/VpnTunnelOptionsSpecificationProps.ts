import { Value } from '../../../kloudformation/Value';

export function vpnTunnelOptionsSpecificationProps(vpnTunnelOptionsSpecificationPropsProps: VpnTunnelOptionsSpecificationProps): VpnTunnelOptionsSpecificationProps { return (vpnTunnelOptionsSpecificationPropsProps) }

export interface VpnTunnelOptionsSpecificationProps {
    preSharedKey?: Value<string>;
    tunnelInsideCidr?: Value<string>;
}