import { Value } from '../../kloudformation/Value';
import { IcmpProps } from './networkaclentry/IcmpProps';
import { PortRangeProps } from './networkaclentry/PortRangeProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function networkAclEntry(networkAclEntryProps: NetworkAclEntry & { logicalName?: string }): NetworkAclEntry { return ({ ...networkAclEntryProps, _logicalType: 'AWS::EC2::NetworkAclEntry' }) as unknown as NetworkAclEntry }

export interface NetworkAclEntry extends KloudResource {
    networkAclId: Value<string>;
    protocol: Value<number>;
    ruleAction: Value<string>;
    ruleNumber: Value<number>;
    cidrBlock?: Value<string>;
    egress?: Value<boolean>;
    icmp?: IcmpProps;
    ipv6CidrBlock?: Value<string>;
    portRange?: PortRangeProps;
}