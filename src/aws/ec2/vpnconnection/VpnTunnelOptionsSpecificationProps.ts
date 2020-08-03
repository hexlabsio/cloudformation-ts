import { Value } from '../../../kloudformation/Value';

export interface VpnTunnelOptionsSpecificationProps {
  preSharedKey?: Value<string>
  tunnelInsideCidr?: Value<string>
}