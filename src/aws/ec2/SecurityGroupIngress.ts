import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type SecurityGroupIngressAttributes = {  }
export function securityGroupIngress(securityGroupIngressProps: SecurityGroupIngress): SecurityGroupIngress & { attributes: SecurityGroupIngressAttributes } { return ({ ...securityGroupIngressProps, _logicalType: 'AWS::EC2::SecurityGroupIngress', attributes: {  } }) }

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