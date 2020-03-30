import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function managedPolicy(managedPolicyProps: ManagedPolicy & { logicalName?: string }): ManagedPolicy { return ({ ...managedPolicyProps, _logicalType: 'AWS::IAM::ManagedPolicy' }) as unknown as ManagedPolicy }

export interface ManagedPolicy extends KloudResource {
    policyDocument: Value<any>;
    description?: Value<string>;
    groups?: Value<Value<string>[]>;
    managedPolicyName?: Value<string>;
    path?: Value<string>;
    roles?: Value<Value<string>[]>;
    users?: Value<Value<string>[]>;
}