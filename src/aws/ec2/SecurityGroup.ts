import { Value } from '../../kloudformation/Value';
import { EgressProps } from './securitygroup/EgressProps';
import { IngressProps } from './securitygroup/IngressProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function securityGroup(securityGroupProps: SecurityGroup & { logicalName?: string }): SecurityGroup { return ({ ...securityGroupProps, _logicalType: 'AWS::EC2::SecurityGroup' }) as unknown as SecurityGroup }

export interface SecurityGroup extends KloudResource {
    groupDescription: Value<string>;
    groupName?: Value<string>;
    securityGroupEgress?: EgressProps[];
    securityGroupIngress?: IngressProps[];
    tags?: Tag[];
    vpcId?: Value<string>;
}