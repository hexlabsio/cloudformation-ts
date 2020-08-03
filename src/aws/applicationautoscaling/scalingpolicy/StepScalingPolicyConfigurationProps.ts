import { Value } from '../../../kloudformation/Value';
import { StepAdjustmentProps } from './StepAdjustmentProps';

export interface StepScalingPolicyConfigurationProps {
  adjustmentType?: Value<string>
  cooldown?: Value<number>
  metricAggregationType?: Value<string>
  minAdjustmentMagnitude?: Value<number>
  stepAdjustments?: StepAdjustmentProps[]
}