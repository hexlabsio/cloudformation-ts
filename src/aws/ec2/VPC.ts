import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type VPCAttributes = { CidrBlock: Attribute<string>;CidrBlockAssociations: Attribute<string[]>;DefaultNetworkAcl: Attribute<string>;DefaultSecurityGroup: Attribute<string>;Ipv6CidrBlocks: Attribute<string[]> }
export function vPC(vPCProps: VPC): VPC & {attributes: VPCAttributes} { return ({ ...vPCProps, _logicalType: 'AWS::EC2::VPC', attributes: { CidrBlock: 'CidrBlock',CidrBlockAssociations: 'CidrBlockAssociations',DefaultNetworkAcl: 'DefaultNetworkAcl',DefaultSecurityGroup: 'DefaultSecurityGroup',Ipv6CidrBlocks: 'Ipv6CidrBlocks' } }) }
   
export interface VPC extends KloudResource {
  cidrBlock: Value<string>
  enableDnsHostnames?: Value<boolean>
  enableDnsSupport?: Value<boolean>
  instanceTenancy?: Value<string>
  tags?: Tag[]
}