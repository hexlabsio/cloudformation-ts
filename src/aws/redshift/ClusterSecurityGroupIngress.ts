import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type ClusterSecurityGroupIngressAttributes = {  }
export function clusterSecurityGroupIngress(clusterSecurityGroupIngressProps: ClusterSecurityGroupIngress): ClusterSecurityGroupIngress & { attributes: ClusterSecurityGroupIngressAttributes } { return ({ ...clusterSecurityGroupIngressProps, _logicalType: 'AWS::Redshift::ClusterSecurityGroupIngress', attributes: {  } }) }

export interface ClusterSecurityGroupIngress extends KloudResource {
    clusterSecurityGroupName: Value<string>;
    cIDRIP?: Value<string>;
    eC2SecurityGroupName?: Value<string>;
    eC2SecurityGroupOwnerId?: Value<string>;
}