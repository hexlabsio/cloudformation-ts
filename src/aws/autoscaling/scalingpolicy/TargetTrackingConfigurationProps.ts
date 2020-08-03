import { CustomizedMetricSpecificationProps } from './CustomizedMetricSpecificationProps';
import { Value } from '../../../kloudformation/Value';
import { PredefinedMetricSpecificationProps } from './PredefinedMetricSpecificationProps';

export interface TargetTrackingConfigurationProps {
  customizedMetricSpecification?: CustomizedMetricSpecificationProps
  disableScaleIn?: Value<boolean>
  predefinedMetricSpecification?: PredefinedMetricSpecificationProps
  targetValue: Value<number>
}