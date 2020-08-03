import { Value } from '../../../kloudformation/Value';

export interface IngressProps {
  cidrIp?: Value<string>
  cidrIpv6?: Value<string>
  description?: Value<string>
  fromPort?: Value<number>
  ipProtocol: Value<string>
  sourcePrefixListId?: Value<string>
  sourceSecurityGroupId?: Value<string>
  sourceSecurityGroupName?: Value<string>
  sourceSecurityGroupOwnerId?: Value<string>
  toPort?: Value<number>
}