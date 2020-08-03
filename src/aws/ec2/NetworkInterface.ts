import { Value } from '../../kloudformation/Value';
import { InstanceIpv6AddressProps } from './networkInterface/InstanceIpv6AddressProps';
import { PrivateIpAddressSpecificationProps } from './networkInterface/PrivateIpAddressSpecificationProps';
import { Tag } from '../Tag';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type NetworkInterfaceAttributes = { PrimaryPrivateIpAddress: Attribute<string>;SecondaryPrivateIpAddresses: Attribute<string[]> }
export function networkInterface(networkInterfaceProps: NetworkInterface): NetworkInterface & {attributes: NetworkInterfaceAttributes} { return ({ ...networkInterfaceProps, _logicalType: 'AWS::EC2::NetworkInterface', attributes: { PrimaryPrivateIpAddress: 'PrimaryPrivateIpAddress',SecondaryPrivateIpAddresses: 'SecondaryPrivateIpAddresses' } }) }
   
export interface NetworkInterface extends KloudResource {
  description?: Value<string>
  groupSet?: Value<Value<string>[]>
  interfaceType?: Value<string>
  ipv6AddressCount?: Value<number>
  ipv6Addresses?: InstanceIpv6AddressProps
  privateIpAddress?: Value<string>
  privateIpAddresses?: PrivateIpAddressSpecificationProps[]
  secondaryPrivateIpAddressCount?: Value<number>
  sourceDestCheck?: Value<boolean>
  subnetId: Value<string>
  tags?: Tag[]
}