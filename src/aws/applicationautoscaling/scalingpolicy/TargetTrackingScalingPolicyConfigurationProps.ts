import { Value } from '../../../kloudformation/Value';
import { CustomizedMetricSpecificationProps } from '../../autoscaling/scalingpolicy/CustomizedMetricSpecificationProps';
import { PredefinedMetricSpecificationProps } from '../../autoscaling/scalingpolicy/PredefinedMetricSpecificationProps';

export function targetTrackingScalingPolicyConfigurationProps(targetTrackingScalingPolicyConfigurationPropsProps: TargetTrackingScalingPolicyConfigurationProps): TargetTrackingScalingPolicyConfigurationProps { return (targetTrackingScalingPolicyConfigurationPropsProps) }

export interface TargetTrackingScalingPolicyConfigurationProps {
    targetValue: Value<number>;
    customizedMetricSpecification?: CustomizedMetricSpecificationProps;
    disableScaleIn?: Value<boolean>;
    predefinedMetricSpecification?: PredefinedMetricSpecificationProps;
    scaleInCooldown?: Value<number>;
    scaleOutCooldown?: Value<number>;
}