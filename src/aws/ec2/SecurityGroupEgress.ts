import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type SecurityGroupEgressAttributes = {  }
export function securityGroupEgress(securityGroupEgressProps: SecurityGroupEgress): SecurityGroupEgress & { attributes: SecurityGroupEgressAttributes } { return ({ ...securityGroupEgressProps, _logicalType: 'AWS::EC2::SecurityGroupEgress', attributes: {  } }) }

export interface SecurityGroupEgress extends KloudResource {
    groupId: Value<string>;
    ipProtocol: Value<string>;
    cidrIp?: Value<string>;
    cidrIpv6?: Value<string>;
    description?: Value<string>;
    destinationPrefixListId?: Value<string>;
    destinationSecurityGroupId?: Value<string>;
    fromPort?: Value<number>;
    toPort?: Value<number>;
}