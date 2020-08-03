import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function securityGroupIngress(securityGroupIngressProps: SecurityGroupIngress): SecurityGroupIngress { return ({ ...securityGroupIngressProps, _logicalType: '' }) }
  
export interface SecurityGroupIngress extends KloudResource {
  cidrIp?: Value<string>
  cidrIpv6?: Value<string>
  description?: Value<string>
  fromPort?: Value<number>
  groupId?: Value<string>
  groupName?: Value<string>
  ipProtocol: Value<string>
  sourcePrefixListId?: Value<string>
  sourceSecurityGroupId?: Value<string>
  sourceSecurityGroupName?: Value<string>
  sourceSecurityGroupOwnerId?: Value<string>
  toPort?: Value<number>
}