import { Value } from '../../kloudformation/Value';
import { InstanceIpv6AddressProps } from './networkinterface/InstanceIpv6AddressProps';
import { PrivateIpAddressSpecificationProps } from './networkinterface/PrivateIpAddressSpecificationProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function networkInterface(networkInterfaceProps: NetworkInterface & { logicalName?: string }): NetworkInterface { return ({ ...networkInterfaceProps, _logicalType: 'AWS::EC2::NetworkInterface' }) as unknown as NetworkInterface }

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