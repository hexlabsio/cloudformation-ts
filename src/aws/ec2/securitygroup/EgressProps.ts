import { Value } from '../../../kloudformation/Value';

export interface EgressProps {
  cidrIp?: Value<string>
  cidrIpv6?: Value<string>
  description?: Value<string>
  destinationPrefixListId?: Value<string>
  destinationSecurityGroupId?: Value<string>
  fromPort?: Value<number>
  ipProtocol: Value<string>
  toPort?: Value<number>
}