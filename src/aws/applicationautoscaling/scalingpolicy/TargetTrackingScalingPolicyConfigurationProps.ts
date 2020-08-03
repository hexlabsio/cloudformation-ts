import { CustomizedMetricSpecificationProps } from './CustomizedMetricSpecificationProps';
import { Value } from '../../../kloudformation/Value';
import { PredefinedMetricSpecificationProps } from './PredefinedMetricSpecificationProps';

export interface TargetTrackingScalingPolicyConfigurationProps {
  customizedMetricSpecification?: CustomizedMetricSpecificationProps
  disableScaleIn?: Value<boolean>
  predefinedMetricSpecification?: PredefinedMetricSpecificationProps
  scaleInCooldown?: Value<number>
  scaleOutCooldown?: Value<number>
  targetValue: Value<number>
}