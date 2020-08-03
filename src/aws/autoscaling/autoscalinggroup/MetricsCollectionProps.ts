import { Value } from '../../../kloudformation/Value';

export interface MetricsCollectionProps {
  granularity: Value<string>
  metrics?: Value<Value<string>[]>
}