import { Value } from '../../../kloudformation/Value';
import { InstanceIpv6AddressProps } from './InstanceIpv6AddressProps';
import { PrivateIpAddressSpecificationProps } from './PrivateIpAddressSpecificationProps';

export function instanceNetworkInterfaceSpecificationProps(instanceNetworkInterfaceSpecificationPropsProps: InstanceNetworkInterfaceSpecificationProps): InstanceNetworkInterfaceSpecificationProps { return (instanceNetworkInterfaceSpecificationPropsProps) as unknown as InstanceNetworkInterfaceSpecificationProps }

export interface InstanceNetworkInterfaceSpecificationProps {
    associatePublicIpAddress?: Value<boolean>;
    deleteOnTermination?: Value<boolean>;
    description?: Value<string>;
    deviceIndex?: Value<number>;
    groups?: Value<Value<string>[]>;
    ipv6AddressCount?: Value<number>;
    ipv6Addresses?: InstanceIpv6AddressProps[];
    networkInterfaceId?: Value<string>;
    privateIpAddresses?: PrivateIpAddressSpecificationProps[];
    secondaryPrivateIpAddressCount?: Value<number>;
    subnetId?: Value<string>;
}