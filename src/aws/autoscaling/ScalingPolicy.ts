import { Value } from '../../kloudformation/Value';
import { StepAdjustmentProps } from '../applicationautoscaling/scalingpolicy/StepAdjustmentProps';
import { TargetTrackingConfigurationProps } from './scalingpolicy/TargetTrackingConfigurationProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type ScalingPolicyAttributes = {  }
export function scalingPolicy(scalingPolicyProps: ScalingPolicy): ScalingPolicy & { attributes: ScalingPolicyAttributes } { return ({ ...scalingPolicyProps, _logicalType: 'AWS::AutoScaling::ScalingPolicy', attributes: {  } }) }

export interface ScalingPolicy extends KloudResource {
    autoScalingGroupName: Value<string>;
    adjustmentType?: Value<string>;
    cooldown?: Value<string>;
    estimatedInstanceWarmup?: Value<number>;
    metricAggregationType?: Value<string>;
    minAdjustmentMagnitude?: Value<number>;
    policyType?: Value<string>;
    scalingAdjustment?: Value<number>;
    stepAdjustments?: StepAdjustmentProps[];
    targetTrackingConfiguration?: TargetTrackingConfigurationProps;
}