import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function vPCCidrBlock(vPCCidrBlockProps: VPCCidrBlock & { logicalName?: string }): VPCCidrBlock { return ({ ...vPCCidrBlockProps, _logicalType: 'AWS::EC2::VPCCidrBlock' }) as unknown as VPCCidrBlock }

export interface VPCCidrBlock extends KloudResource {
    vpcId: Value<string>;
    amazonProvidedIpv6CidrBlock?: Value<boolean>;
    cidrBlock?: Value<string>;
}