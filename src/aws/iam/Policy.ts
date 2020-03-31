import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type PolicyAttributes = {  }
export function policy(policyProps: Policy): Policy & { attributes: PolicyAttributes } { return ({ ...policyProps, _logicalType: 'AWS::IAM::Policy', attributes: {  } }) }

export interface Policy extends KloudResource {
    policyDocument: Value<any>;
    policyName: Value<string>;
    groups?: Value<Value<string>[]>;
    roles?: Value<Value<string>[]>;
    users?: Value<Value<string>[]>;
}