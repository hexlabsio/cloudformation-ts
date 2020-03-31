import { AutoScalingThresholdsProps } from './AutoScalingThresholdsProps';
import { Value } from '../../../kloudformation/Value';

export function loadBasedAutoScalingProps(loadBasedAutoScalingPropsProps: LoadBasedAutoScalingProps): LoadBasedAutoScalingProps { return (loadBasedAutoScalingPropsProps) }

export interface LoadBasedAutoScalingProps {
    downScaling?: AutoScalingThresholdsProps;
    enable?: Value<boolean>;
    upScaling?: AutoScalingThresholdsProps;
}