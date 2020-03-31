import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type VPCAttributes = { CidrBlock: Attribute<string>; CidrBlockAssociations: Attribute<Value<string>[]>; DefaultNetworkAcl: Attribute<string>; DefaultSecurityGroup: Attribute<string>; Ipv6CidrBlocks: Attribute<Value<string>[]> }
export function vPC(vPCProps: VPC): VPC & { attributes: VPCAttributes } { return ({ ...vPCProps, _logicalType: 'AWS::EC2::VPC', attributes: { CidrBlock: 'CidrBlock', CidrBlockAssociations: 'CidrBlockAssociations', DefaultNetworkAcl: 'DefaultNetworkAcl', DefaultSecurityGroup: 'DefaultSecurityGroup', Ipv6CidrBlocks: 'Ipv6CidrBlocks' } }) }

export interface VPC extends KloudResource {
    cidrBlock: Value<string>;
    enableDnsHostnames?: Value<boolean>;
    enableDnsSupport?: Value<boolean>;
    instanceTenancy?: Value<string>;
    tags?: Tag[];
}