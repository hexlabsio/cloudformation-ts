import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function vPCCidrBlock(vPCCidrBlockProps: VPCCidrBlock): VPCCidrBlock { return ({ ...vPCCidrBlockProps, _logicalType: '' }) }
  
export interface VPCCidrBlock extends KloudResource {
  amazonProvidedIpv6CidrBlock?: Value<boolean>
  cidrBlock?: Value<string>
  vpcId: Value<string>
}