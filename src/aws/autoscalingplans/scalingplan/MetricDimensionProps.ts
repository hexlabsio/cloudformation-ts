import { Value } from '../../../kloudformation/Value';

export function metricDimensionProps(metricDimensionPropsProps: MetricDimensionProps): MetricDimensionProps { return (metricDimensionPropsProps) }

export interface MetricDimensionProps {
    value: Value<string>;
    name: Value<string>;
}