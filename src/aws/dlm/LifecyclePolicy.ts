import { Value } from '../../kloudformation/Value';
import { PolicyDetailsProps } from './lifecyclepolicy/PolicyDetailsProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function lifecyclePolicy(lifecyclePolicyProps: LifecyclePolicy & { logicalName?: string }): LifecyclePolicy { return ({ ...lifecyclePolicyProps, _logicalType: 'AWS::DLM::LifecyclePolicy' }) as unknown as LifecyclePolicy }

export interface LifecyclePolicy extends KloudResource {
    executionRoleArn?: Value<string>;
    description?: Value<string>;
    state?: Value<string>;
    policyDetails?: PolicyDetailsProps;
}