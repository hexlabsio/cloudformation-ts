import { Value } from '../../../kloudformation/Value';

export function metricDimensionProps(metricDimensionPropsProps: MetricDimensionProps): MetricDimensionProps { return (metricDimensionPropsProps) }

export interface MetricDimensionProps {
    key: Value<string>;
    value: Value<string>;
}