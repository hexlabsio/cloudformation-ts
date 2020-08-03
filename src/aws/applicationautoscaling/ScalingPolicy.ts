import { Value } from '../../kloudformation/Value';
import { StepScalingPolicyConfigurationProps } from './scalingPolicy/StepScalingPolicyConfigurationProps';
import { TargetTrackingScalingPolicyConfigurationProps } from './scalingPolicy/TargetTrackingScalingPolicyConfigurationProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function scalingPolicy(scalingPolicyProps: ScalingPolicy): ScalingPolicy { return ({ ...scalingPolicyProps, _logicalType: '' }) }
  
export interface ScalingPolicy extends KloudResource {
  policyName: Value<string>
  policyType: Value<string>
  resourceId?: Value<string>
  scalableDimension?: Value<string>
  scalingTargetId?: Value<string>
  serviceNamespace?: Value<string>
  stepScalingPolicyConfiguration?: StepScalingPolicyConfigurationProps
  targetTrackingScalingPolicyConfiguration?: TargetTrackingScalingPolicyConfigurationProps
}