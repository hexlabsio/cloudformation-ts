import { Value } from '../../kloudformation/Value';
import { StepAdjustmentProps } from './scalingPolicy/StepAdjustmentProps';
import { TargetTrackingConfigurationProps } from './scalingPolicy/TargetTrackingConfigurationProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function scalingPolicy(scalingPolicyProps: ScalingPolicy): ScalingPolicy { return ({ ...scalingPolicyProps, _logicalType: '' }) }
  
export interface ScalingPolicy extends KloudResource {
  adjustmentType?: Value<string>
  autoScalingGroupName: Value<string>
  cooldown?: Value<string>
  estimatedInstanceWarmup?: Value<number>
  metricAggregationType?: Value<string>
  minAdjustmentMagnitude?: Value<number>
  policyType?: Value<string>
  scalingAdjustment?: Value<number>
  stepAdjustments?: StepAdjustmentProps[]
  targetTrackingConfiguration?: TargetTrackingConfigurationProps
}