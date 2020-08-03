import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function securityGroupIngress(securityGroupIngressProps: SecurityGroupIngress): SecurityGroupIngress { return ({ ...securityGroupIngressProps, _logicalType: '' }) }
  
export interface SecurityGroupIngress extends KloudResource {
  cacheSecurityGroupName: Value<string>
  eC2SecurityGroupName: Value<string>
  eC2SecurityGroupOwnerId?: Value<string>
}