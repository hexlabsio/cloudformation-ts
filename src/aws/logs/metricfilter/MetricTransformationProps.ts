import { Value } from '../../../kloudformation/Value';

export interface MetricTransformationProps {
  defaultValue?: Value<number>
  metricName: Value<string>
  metricNamespace: Value<string>
  metricValue: Value<string>
}