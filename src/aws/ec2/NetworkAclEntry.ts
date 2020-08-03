import { Value } from '../../kloudformation/Value';
import { IcmpProps } from './networkAclEntry/IcmpProps';
import { PortRangeProps } from './networkAclEntry/PortRangeProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function networkAclEntry(networkAclEntryProps: NetworkAclEntry): NetworkAclEntry { return ({ ...networkAclEntryProps, _logicalType: '' }) }
  
export interface NetworkAclEntry extends KloudResource {
  cidrBlock?: Value<string>
  egress?: Value<boolean>
  icmp?: IcmpProps
  ipv6CidrBlock?: Value<string>
  networkAclId: Value<string>
  portRange?: PortRangeProps
  protocol: Value<number>
  ruleAction: Value<string>
  ruleNumber: Value<number>
}