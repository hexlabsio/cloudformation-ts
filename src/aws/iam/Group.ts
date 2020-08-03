import { Value } from '../../kloudformation/Value';
import { PolicyProps } from './group/PolicyProps';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type GroupAttributes = { Arn: Attribute<string> }
export function group(groupProps: Group): Group & {attributes: GroupAttributes} { return ({ ...groupProps, _logicalType: 'AWS::IAM::Group', attributes: { Arn: 'Arn' } }) }
   
export interface Group extends KloudResource {
  groupName?: Value<string>
  managedPolicyArns?: Value<Value<string>[]>
  path?: Value<string>
  policies?: PolicyProps[]
}