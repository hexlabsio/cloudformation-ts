import { Value } from '../../kloudformation/Value';
import { PolicyDetailsProps } from './lifecyclePolicy/PolicyDetailsProps';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type LifecyclePolicyAttributes = { Arn: Attribute<string> }
export function lifecyclePolicy(lifecyclePolicyProps: LifecyclePolicy): LifecyclePolicy & {attributes: LifecyclePolicyAttributes} { return ({ ...lifecyclePolicyProps, _logicalType: 'AWS::DLM::LifecyclePolicy', attributes: { Arn: 'Arn' } }) }
   
export interface LifecyclePolicy extends KloudResource {
  executionRoleArn?: Value<string>
  description?: Value<string>
  state?: Value<string>
  policyDetails?: PolicyDetailsProps
}