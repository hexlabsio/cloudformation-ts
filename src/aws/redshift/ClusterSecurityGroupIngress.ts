import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function clusterSecurityGroupIngress(clusterSecurityGroupIngressProps: ClusterSecurityGroupIngress): ClusterSecurityGroupIngress { return ({ ...clusterSecurityGroupIngressProps, _logicalType: '' }) }
  
export interface ClusterSecurityGroupIngress extends KloudResource {
  cIDRIP?: Value<string>
  clusterSecurityGroupName: Value<string>
  eC2SecurityGroupName?: Value<string>
  eC2SecurityGroupOwnerId?: Value<string>
}