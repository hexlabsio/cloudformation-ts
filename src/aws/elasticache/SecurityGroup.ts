import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function securityGroup(securityGroupProps: SecurityGroup & { logicalName?: string }): SecurityGroup { return ({ ...securityGroupProps, _logicalType: 'AWS::ElastiCache::SecurityGroup' }) as unknown as SecurityGroup }

export interface SecurityGroup extends KloudResource {
    description: Value<string>;
}