import { Value } from '../../kloudformation/Value';
import { EgressProps } from './securityGroup/EgressProps';
import { IngressProps } from './securityGroup/IngressProps';
import { Tag } from '../Tag';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type SecurityGroupAttributes = { GroupId: Attribute<string>;VpcId: Attribute<string> }
export function securityGroup(securityGroupProps: SecurityGroup): SecurityGroup & {attributes: SecurityGroupAttributes} { return ({ ...securityGroupProps, _logicalType: 'AWS::EC2::SecurityGroup', attributes: { GroupId: 'GroupId',VpcId: 'VpcId' } }) }
   
export interface SecurityGroup extends KloudResource {
  groupDescription: Value<string>
  groupName?: Value<string>
  securityGroupEgress?: EgressProps[]
  securityGroupIngress?: IngressProps[]
  tags?: Tag[]
  vpcId?: Value<string>
}