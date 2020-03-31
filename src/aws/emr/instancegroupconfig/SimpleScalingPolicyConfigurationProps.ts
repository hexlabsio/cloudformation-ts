import { Value } from '../../../kloudformation/Value';

export function simpleScalingPolicyConfigurationProps(simpleScalingPolicyConfigurationPropsProps: SimpleScalingPolicyConfigurationProps): SimpleScalingPolicyConfigurationProps { return (simpleScalingPolicyConfigurationPropsProps) }

export interface SimpleScalingPolicyConfigurationProps {
    scalingAdjustment: Value<number>;
    adjustmentType?: Value<string>;
    coolDown?: Value<number>;
}