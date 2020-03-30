import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function securityGroupIngress(securityGroupIngressProps: SecurityGroupIngress & { logicalName?: string }): SecurityGroupIngress { return ({ ...securityGroupIngressProps, _logicalType: 'AWS::EC2::SecurityGroupIngress' }) as unknown as SecurityGroupIngress }

export interface SecurityGroupIngress extends KloudResource {
    ipProtocol: Value<string>;
    cidrIp?: Value<string>;
    cidrIpv6?: Value<string>;
    description?: Value<string>;
    fromPort?: Value<number>;
    groupId?: Value<string>;
    groupName?: Value<string>;
    sourcePrefixListId?: Value<string>;
    sourceSecurityGroupId?: Value<string>;
    sourceSecurityGroupName?: Value<string>;
    sourceSecurityGroupOwnerId?: Value<string>;
    toPort?: Value<number>;
}