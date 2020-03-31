import { Value } from '../../../kloudformation/Value';

export function autoScalingThresholdsProps(autoScalingThresholdsPropsProps: AutoScalingThresholdsProps): AutoScalingThresholdsProps { return (autoScalingThresholdsPropsProps) }

export interface AutoScalingThresholdsProps {
    cpuThreshold?: Value<number>;
    ignoreMetricsTime?: Value<number>;
    instanceCount?: Value<number>;
    loadThreshold?: Value<number>;
    memoryThreshold?: Value<number>;
    thresholdsWaitTime?: Value<number>;
}