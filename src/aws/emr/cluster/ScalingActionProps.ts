import { SimpleScalingPolicyConfigurationProps } from './SimpleScalingPolicyConfigurationProps';
import { Value } from '../../../kloudformation/Value';

export function scalingActionProps(scalingActionPropsProps: ScalingActionProps): ScalingActionProps { return (scalingActionPropsProps) }

export interface ScalingActionProps {
    simpleScalingPolicyConfiguration: SimpleScalingPolicyConfigurationProps;
    market?: Value<string>;
}