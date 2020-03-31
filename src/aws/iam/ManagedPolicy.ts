import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type ManagedPolicyAttributes = {  }
export function managedPolicy(managedPolicyProps: ManagedPolicy): ManagedPolicy & { attributes: ManagedPolicyAttributes } { return ({ ...managedPolicyProps, _logicalType: 'AWS::IAM::ManagedPolicy', attributes: {  } }) }

export interface ManagedPolicy extends KloudResource {
    policyDocument: Value<any>;
    description?: Value<string>;
    groups?: Value<Value<string>[]>;
    managedPolicyName?: Value<string>;
    path?: Value<string>;
    roles?: Value<Value<string>[]>;
    users?: Value<Value<string>[]>;
}