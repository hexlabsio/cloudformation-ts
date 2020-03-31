import { Value } from '../../../kloudformation/Value';

export function metricsCollectionProps(metricsCollectionPropsProps: MetricsCollectionProps): MetricsCollectionProps { return (metricsCollectionPropsProps) }

export interface MetricsCollectionProps {
    granularity: Value<string>;
    metrics?: Value<Value<string>[]>;
}