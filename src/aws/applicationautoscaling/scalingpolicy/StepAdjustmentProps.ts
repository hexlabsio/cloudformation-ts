import { Value } from '../../../kloudformation/Value';

export interface StepAdjustmentProps {
  metricIntervalLowerBound?: Value<number>
  metricIntervalUpperBound?: Value<number>
  scalingAdjustment: Value<number>
}