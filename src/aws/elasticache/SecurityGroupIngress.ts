import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type SecurityGroupIngressAttributes = {  }
export function securityGroupIngress(securityGroupIngressProps: SecurityGroupIngress): SecurityGroupIngress & { attributes: SecurityGroupIngressAttributes } { return ({ ...securityGroupIngressProps, _logicalType: 'AWS::ElastiCache::SecurityGroupIngress', attributes: {  } }) }

export interface SecurityGroupIngress extends KloudResource {
    cacheSecurityGroupName: Value<string>;
    eC2SecurityGroupName: Value<string>;
    eC2SecurityGroupOwnerId?: Value<string>;
}