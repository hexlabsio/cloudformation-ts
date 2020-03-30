import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function securityGroupIngress(securityGroupIngressProps: SecurityGroupIngress & { logicalName?: string }): SecurityGroupIngress { return ({ ...securityGroupIngressProps, _logicalType: 'AWS::ElastiCache::SecurityGroupIngress' }) as unknown as SecurityGroupIngress }

export interface SecurityGroupIngress extends KloudResource {
    cacheSecurityGroupName: Value<string>;
    eC2SecurityGroupName: Value<string>;
    eC2SecurityGroupOwnerId?: Value<string>;
}