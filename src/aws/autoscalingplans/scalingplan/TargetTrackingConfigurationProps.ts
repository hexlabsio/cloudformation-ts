import { Value } from '../../../kloudformation/Value';
import { PredefinedScalingMetricSpecificationProps } from './PredefinedScalingMetricSpecificationProps';
import { CustomizedScalingMetricSpecificationProps } from './CustomizedScalingMetricSpecificationProps';

export function targetTrackingConfigurationProps(targetTrackingConfigurationPropsProps: TargetTrackingConfigurationProps): TargetTrackingConfigurationProps { return (targetTrackingConfigurationPropsProps) }

export interface TargetTrackingConfigurationProps {
    targetValue: Value<number>;
    scaleOutCooldown?: Value<number>;
    predefinedScalingMetricSpecification?: PredefinedScalingMetricSpecificationProps;
    disableScaleIn?: Value<boolean>;
    scaleInCooldown?: Value<number>;
    estimatedInstanceWarmup?: Value<number>;
    customizedScalingMetricSpecification?: CustomizedScalingMetricSpecificationProps;
}