import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type VPCCidrBlockAttributes = {  }
export function vPCCidrBlock(vPCCidrBlockProps: VPCCidrBlock): VPCCidrBlock & { attributes: VPCCidrBlockAttributes } { return ({ ...vPCCidrBlockProps, _logicalType: 'AWS::EC2::VPCCidrBlock', attributes: {  } }) }

export interface VPCCidrBlock extends KloudResource {
    vpcId: Value<string>;
    amazonProvidedIpv6CidrBlock?: Value<boolean>;
    cidrBlock?: Value<string>;
}