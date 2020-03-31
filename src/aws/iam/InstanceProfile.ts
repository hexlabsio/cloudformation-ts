import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type InstanceProfileAttributes = { Arn: Attribute<string> }
export function instanceProfile(instanceProfileProps: InstanceProfile): InstanceProfile & { attributes: InstanceProfileAttributes } { return ({ ...instanceProfileProps, _logicalType: 'AWS::IAM::InstanceProfile', attributes: { Arn: 'Arn' } }) }

export interface InstanceProfile extends KloudResource {
    roles: Value<Value<string>[]>;
    instanceProfileName?: Value<string>;
    path?: Value<string>;
}