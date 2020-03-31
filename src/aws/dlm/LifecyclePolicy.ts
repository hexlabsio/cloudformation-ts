import { Value } from '../../kloudformation/Value';
import { PolicyDetailsProps } from './lifecyclepolicy/PolicyDetailsProps';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type LifecyclePolicyAttributes = { Arn: Attribute<string> }
export function lifecyclePolicy(lifecyclePolicyProps: LifecyclePolicy): LifecyclePolicy & { attributes: LifecyclePolicyAttributes } { return ({ ...lifecyclePolicyProps, _logicalType: 'AWS::DLM::LifecyclePolicy', attributes: { Arn: 'Arn' } }) }

export interface LifecyclePolicy extends KloudResource {
    executionRoleArn?: Value<string>;
    description?: Value<string>;
    state?: Value<string>;
    policyDetails?: PolicyDetailsProps;
}