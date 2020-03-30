import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function instanceProfile(instanceProfileProps: InstanceProfile & { logicalName?: string }): InstanceProfile { return ({ ...instanceProfileProps, _logicalType: 'AWS::IAM::InstanceProfile' }) as unknown as InstanceProfile }

export interface InstanceProfile extends KloudResource {
    roles: Value<Value<string>[]>;
    instanceProfileName?: Value<string>;
    path?: Value<string>;
}