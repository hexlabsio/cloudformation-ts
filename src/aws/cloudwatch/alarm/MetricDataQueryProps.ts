import { Value } from '../../../kloudformation/Value';
import { MetricStatProps } from './MetricStatProps';

export interface MetricDataQueryProps {
  expression?: Value<string>
  id: Value<string>
  label?: Value<string>
  metricStat?: MetricStatProps
  period?: Value<number>
  returnData?: Value<boolean>
}