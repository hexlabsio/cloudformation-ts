import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function clusterSecurityGroupIngress(clusterSecurityGroupIngressProps: ClusterSecurityGroupIngress & { logicalName?: string }): ClusterSecurityGroupIngress { return ({ ...clusterSecurityGroupIngressProps, _logicalType: 'AWS::Redshift::ClusterSecurityGroupIngress' }) as unknown as ClusterSecurityGroupIngress }

export interface ClusterSecurityGroupIngress extends KloudResource {
    clusterSecurityGroupName: Value<string>;
    cIDRIP?: Value<string>;
    eC2SecurityGroupName?: Value<string>;
    eC2SecurityGroupOwnerId?: Value<string>;
}