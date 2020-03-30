import { Value } from '../../../kloudformation/Value';

export function stepAdjustmentProps(stepAdjustmentPropsProps: StepAdjustmentProps): StepAdjustmentProps { return (stepAdjustmentPropsProps) as unknown as StepAdjustmentProps }

export interface StepAdjustmentProps {
    scalingAdjustment: Value<number>;
    metricIntervalLowerBound?: Value<number>;
    metricIntervalUpperBound?: Value<number>;
}