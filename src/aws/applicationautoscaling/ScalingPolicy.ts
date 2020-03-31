import { Value } from '../../kloudformation/Value';
import { StepScalingPolicyConfigurationProps } from './scalingpolicy/StepScalingPolicyConfigurationProps';
import { TargetTrackingScalingPolicyConfigurationProps } from './scalingpolicy/TargetTrackingScalingPolicyConfigurationProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type ScalingPolicyAttributes = {  }
export function scalingPolicy(scalingPolicyProps: ScalingPolicy): ScalingPolicy & { attributes: ScalingPolicyAttributes } { return ({ ...scalingPolicyProps, _logicalType: 'AWS::ApplicationAutoScaling::ScalingPolicy', attributes: {  } }) }

export interface ScalingPolicy extends KloudResource {
    policyName: Value<string>;
    policyType: Value<string>;
    resourceId?: Value<string>;
    scalableDimension?: Value<string>;
    scalingTargetId?: Value<string>;
    serviceNamespace?: Value<string>;
    stepScalingPolicyConfiguration?: StepScalingPolicyConfigurationProps;
    targetTrackingScalingPolicyConfiguration?: TargetTrackingScalingPolicyConfigurationProps;
}