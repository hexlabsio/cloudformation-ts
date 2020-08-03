import { Value } from '../../../kloudformation/Value';

export interface PredefinedMetricSpecificationProps {
  predefinedMetricType: Value<string>
  resourceLabel?: Value<string>
}