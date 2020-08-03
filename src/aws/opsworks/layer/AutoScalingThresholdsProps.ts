import { Value } from '../../../kloudformation/Value';

export interface AutoScalingThresholdsProps {
  cpuThreshold?: Value<number>
  ignoreMetricsTime?: Value<number>
  instanceCount?: Value<number>
  loadThreshold?: Value<number>
  memoryThreshold?: Value<number>
  thresholdsWaitTime?: Value<number>
}