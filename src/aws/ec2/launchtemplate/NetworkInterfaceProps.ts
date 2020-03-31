import { Value } from '../../../kloudformation/Value';
import { PrivateIpAddProps } from './PrivateIpAddProps';
import { Ipv6AddProps } from './Ipv6AddProps';

export function networkInterfaceProps(networkInterfacePropsProps: NetworkInterfaceProps): NetworkInterfaceProps { return (networkInterfacePropsProps) }

export interface NetworkInterfaceProps {
    description?: Value<string>;
    privateIpAddress?: Value<string>;
    privateIpAddresses?: PrivateIpAddProps[];
    secondaryPrivateIpAddressCount?: Value<number>;
    deviceIndex?: Value<number>;
    subnetId?: Value<string>;
    ipv6Addresses?: Ipv6AddProps[];
    associatePublicIpAddress?: Value<boolean>;
    networkInterfaceId?: Value<string>;
    interfaceType?: Value<string>;
    ipv6AddressCount?: Value<number>;
    groups?: Value<Value<string>[]>;
    deleteOnTermination?: Value<boolean>;
}