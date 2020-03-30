import { Value } from '../../kloudformation/Value';
import { StepScalingPolicyConfigurationProps } from './scalingpolicy/StepScalingPolicyConfigurationProps';
import { TargetTrackingScalingPolicyConfigurationProps } from './scalingpolicy/TargetTrackingScalingPolicyConfigurationProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function scalingPolicy(scalingPolicyProps: ScalingPolicy & { logicalName?: string }): ScalingPolicy { return ({ ...scalingPolicyProps, _logicalType: 'AWS::ApplicationAutoScaling::ScalingPolicy' }) as unknown as ScalingPolicy }

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