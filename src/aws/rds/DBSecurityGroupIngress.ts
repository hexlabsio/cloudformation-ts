import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function dBSecurityGroupIngress(dBSecurityGroupIngressProps: DBSecurityGroupIngress): DBSecurityGroupIngress { return ({ ...dBSecurityGroupIngressProps, _logicalType: '' }) }
  
export interface DBSecurityGroupIngress extends KloudResource {
  cIDRIP?: Value<string>
  dBSecurityGroupName: Value<string>
  eC2SecurityGroupId?: Value<string>
  eC2SecurityGroupName?: Value<string>
  eC2SecurityGroupOwnerId?: Value<string>
}