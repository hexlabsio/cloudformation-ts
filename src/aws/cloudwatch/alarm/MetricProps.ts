import { DimensionProps } from './DimensionProps';
import { Value } from '../../../kloudformation/Value';

export interface MetricProps {
  dimensions?: DimensionProps[]
  metricName?: Value<string>
  namespace?: Value<string>
}