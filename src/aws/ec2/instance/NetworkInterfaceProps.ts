import { Value } from '../../../kloudformation/Value';
import { InstanceIpv6AddressProps } from './InstanceIpv6AddressProps';
import { PrivateIpAddressSpecificationProps } from './PrivateIpAddressSpecificationProps';

export interface NetworkInterfaceProps {
  associatePublicIpAddress?: Value<boolean>
  deleteOnTermination?: Value<boolean>
  description?: Value<string>
  deviceIndex: Value<string>
  groupSet?: Value<Value<string>[]>
  ipv6AddressCount?: Value<number>
  ipv6Addresses?: InstanceIpv6AddressProps[]
  networkInterfaceId?: Value<string>
  privateIpAddress?: Value<string>
  privateIpAddresses?: PrivateIpAddressSpecificationProps[]
  secondaryPrivateIpAddressCount?: Value<number>
  subnetId?: Value<string>
}