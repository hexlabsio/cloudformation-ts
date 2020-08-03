import { Value } from '../../../kloudformation/Value';
import { PredefinedScalingMetricSpecificationProps } from './PredefinedScalingMetricSpecificationProps';
import { CustomizedScalingMetricSpecificationProps } from './CustomizedScalingMetricSpecificationProps';

export interface TargetTrackingConfigurationProps {
  scaleOutCooldown?: Value<number>
  targetValue: Value<number>
  predefinedScalingMetricSpecification?: PredefinedScalingMetricSpecificationProps
  disableScaleIn?: Value<boolean>
  scaleInCooldown?: Value<number>
  estimatedInstanceWarmup?: Value<number>
  customizedScalingMetricSpecification?: CustomizedScalingMetricSpecificationProps
}