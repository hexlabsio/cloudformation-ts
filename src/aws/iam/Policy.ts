import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function policy(policyProps: Policy & { logicalName?: string }): Policy { return ({ ...policyProps, _logicalType: 'AWS::IAM::Policy' }) as unknown as Policy }

export interface Policy extends KloudResource {
    policyDocument: Value<any>;
    policyName: Value<string>;
    groups?: Value<Value<string>[]>;
    roles?: Value<Value<string>[]>;
    users?: Value<Value<string>[]>;
}