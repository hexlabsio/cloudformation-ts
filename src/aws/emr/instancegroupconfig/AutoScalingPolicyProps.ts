import { ScalingConstraintsProps } from './ScalingConstraintsProps';
import { ScalingRuleProps } from './ScalingRuleProps';

export interface AutoScalingPolicyProps {
  constraints: ScalingConstraintsProps
  rules: ScalingRuleProps[]
}