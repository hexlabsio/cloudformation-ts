import { MetricProps } from './MetricProps';
import { Value } from '../../../kloudformation/Value';

export interface MetricStatProps {
  metric: MetricProps
  period: Value<number>
  stat: Value<string>
  unit?: Value<string>
}