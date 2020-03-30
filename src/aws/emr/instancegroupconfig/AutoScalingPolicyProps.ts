import { ScalingConstraintsProps } from './ScalingConstraintsProps';
import { ScalingRuleProps } from './ScalingRuleProps';

export function autoScalingPolicyProps(autoScalingPolicyPropsProps: AutoScalingPolicyProps): AutoScalingPolicyProps { return (autoScalingPolicyPropsProps) as unknown as AutoScalingPolicyProps }

export interface AutoScalingPolicyProps {
    constraints: ScalingConstraintsProps;
    rules: ScalingRuleProps[];
}