import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type SubnetAttributes = { AvailabilityZone: Attribute<string>;Ipv6CidrBlocks: Attribute<string[]>;NetworkAclAssociationId: Attribute<string>;VpcId: Attribute<string> }
export function subnet(subnetProps: Subnet): Subnet & {attributes: SubnetAttributes} { return ({ ...subnetProps, _logicalType: 'AWS::EC2::Subnet', attributes: { AvailabilityZone: 'AvailabilityZone',Ipv6CidrBlocks: 'Ipv6CidrBlocks',NetworkAclAssociationId: 'NetworkAclAssociationId',VpcId: 'VpcId' } }) }
   
export interface Subnet extends KloudResource {
  assignIpv6AddressOnCreation?: Value<boolean>
  availabilityZone?: Value<string>
  cidrBlock: Value<string>
  ipv6CidrBlock?: Value<string>
  mapPublicIpOnLaunch?: Value<boolean>
  tags?: Tag[]
  vpcId: Value<string>
}