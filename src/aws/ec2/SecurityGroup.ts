import { Value } from '../../kloudformation/Value';
import { EgressProps } from './securitygroup/EgressProps';
import { IngressProps } from './securitygroup/IngressProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type SecurityGroupAttributes = { GroupId: Attribute<string>; VpcId: Attribute<string> }
export function securityGroup(securityGroupProps: SecurityGroup): SecurityGroup & { attributes: SecurityGroupAttributes } { return ({ ...securityGroupProps, _logicalType: 'AWS::EC2::SecurityGroup', attributes: { GroupId: 'GroupId', VpcId: 'VpcId' } }) }

export interface SecurityGroup extends KloudResource {
    groupDescription: Value<string>;
    groupName?: Value<string>;
    securityGroupEgress?: EgressProps[];
    securityGroupIngress?: IngressProps[];
    tags?: Tag[];
    vpcId?: Value<string>;
}