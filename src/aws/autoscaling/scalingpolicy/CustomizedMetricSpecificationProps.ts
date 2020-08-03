import { MetricDimensionProps } from './MetricDimensionProps';
import { Value } from '../../../kloudformation/Value';

export interface CustomizedMetricSpecificationProps {
  dimensions?: MetricDimensionProps[]
  metricName: Value<string>
  namespace: Value<string>
  statistic: Value<string>
  unit?: Value<string>
}