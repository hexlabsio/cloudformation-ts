import { Value } from '../../kloudformation/Value';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type InstanceProfileAttributes = { Arn: Attribute<string> }
export function instanceProfile(instanceProfileProps: InstanceProfile): InstanceProfile & {attributes: InstanceProfileAttributes} { return ({ ...instanceProfileProps, _logicalType: 'AWS::IAM::InstanceProfile', attributes: { Arn: 'Arn' } }) }
   
export interface InstanceProfile extends KloudResource {
  instanceProfileName?: Value<string>
  path?: Value<string>
  roles: Value<Value<string>[]>
}