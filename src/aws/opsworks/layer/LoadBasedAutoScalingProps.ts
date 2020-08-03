import { AutoScalingThresholdsProps } from './AutoScalingThresholdsProps';
import { Value } from '../../../kloudformation/Value';

export interface LoadBasedAutoScalingProps {
  downScaling?: AutoScalingThresholdsProps
  enable?: Value<boolean>
  upScaling?: AutoScalingThresholdsProps
}