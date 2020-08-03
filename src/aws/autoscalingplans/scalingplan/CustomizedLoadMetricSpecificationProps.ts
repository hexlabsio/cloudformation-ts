import { Value } from '../../../kloudformation/Value';
import { MetricDimensionProps } from './MetricDimensionProps';

export interface CustomizedLoadMetricSpecificationProps {
  metricName: Value<string>
  statistic: Value<string>
  dimensions?: MetricDimensionProps[]
  unit?: Value<string>
  namespace: Value<string>
}