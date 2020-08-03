import { Value } from '../../../kloudformation/Value';

export interface MetricDimensionProps {
  name: Value<string>
  value: Value<string>
}