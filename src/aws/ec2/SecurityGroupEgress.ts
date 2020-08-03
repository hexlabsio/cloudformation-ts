import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function securityGroupEgress(securityGroupEgressProps: SecurityGroupEgress): SecurityGroupEgress { return ({ ...securityGroupEgressProps, _logicalType: '' }) }
  
export interface SecurityGroupEgress extends KloudResource {
  cidrIp?: Value<string>
  cidrIpv6?: Value<string>
  description?: Value<string>
  destinationPrefixListId?: Value<string>
  destinationSecurityGroupId?: Value<string>
  fromPort?: Value<number>
  groupId: Value<string>
  ipProtocol: Value<string>
  toPort?: Value<number>
}