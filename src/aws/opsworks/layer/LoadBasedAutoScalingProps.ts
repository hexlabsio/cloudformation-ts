import { AutoScalingThresholdsProps } from './AutoScalingThresholdsProps';
import { Value } from '../../../kloudformation/Value';

export function loadBasedAutoScalingProps(loadBasedAutoScalingPropsProps: LoadBasedAutoScalingProps): LoadBasedAutoScalingProps { return (loadBasedAutoScalingPropsProps) as unknown as LoadBasedAutoScalingProps }

export interface LoadBasedAutoScalingProps {
    downScaling?: AutoScalingThresholdsProps;
    enable?: Value<boolean>;
    upScaling?: AutoScalingThresholdsProps;
}