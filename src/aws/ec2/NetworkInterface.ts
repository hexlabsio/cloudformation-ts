import { Value } from '../../kloudformation/Value';
import { InstanceIpv6AddressProps } from './networkinterface/InstanceIpv6AddressProps';
import { PrivateIpAddressSpecificationProps } from './networkinterface/PrivateIpAddressSpecificationProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type NetworkInterfaceAttributes = { PrimaryPrivateIpAddress: Attribute<string>; SecondaryPrivateIpAddresses: Attribute<Value<string>[]> }
export function networkInterface(networkInterfaceProps: NetworkInterface): NetworkInterface & { attributes: NetworkInterfaceAttributes } { return ({ ...networkInterfaceProps, _logicalType: 'AWS::EC2::NetworkInterface', attributes: { PrimaryPrivateIpAddress: 'PrimaryPrivateIpAddress', SecondaryPrivateIpAddresses: 'SecondaryPrivateIpAddresses' } }) }

export interface NetworkInterface extends KloudResource {
    subnetId: Value<string>;
    description?: Value<string>;
    groupSet?: Value<Value<string>[]>;
    interfaceType?: Value<string>;
    ipv6AddressCount?: Value<number>;
    ipv6Addresses?: InstanceIpv6AddressProps;
    privateIpAddress?: Value<string>;
    privateIpAddresses?: PrivateIpAddressSpecificationProps[];
    secondaryPrivateIpAddressCount?: Value<number>;
    sourceDestCheck?: Value<boolean>;
    tags?: Tag[];
}