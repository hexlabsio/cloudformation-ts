import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type PolicyAttributes = { Arn: Attribute<string> }
export function policy(policyProps: Policy): Policy & { attributes: PolicyAttributes } { return ({ ...policyProps, _logicalType: 'AWS::IoT::Policy', attributes: { Arn: 'Arn' } }) }

export interface Policy extends KloudResource {
    policyDocument: Value<any>;
    policyName?: Value<string>;
}