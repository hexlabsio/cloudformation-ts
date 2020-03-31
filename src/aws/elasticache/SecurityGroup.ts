import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type SecurityGroupAttributes = {  }
export function securityGroup(securityGroupProps: SecurityGroup): SecurityGroup & { attributes: SecurityGroupAttributes } { return ({ ...securityGroupProps, _logicalType: 'AWS::ElastiCache::SecurityGroup', attributes: {  } }) }

export interface SecurityGroup extends KloudResource {
    description: Value<string>;
}