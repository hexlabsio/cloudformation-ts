import { Value } from '../../../kloudformation/Value';

export interface PredefinedScalingMetricSpecificationProps {
  resourceLabel?: Value<string>
  predefinedScalingMetricType: Value<string>
}