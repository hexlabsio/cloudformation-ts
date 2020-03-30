import { Value } from '../../../kloudformation/Value';

export function metricDimensionProps(metricDimensionPropsProps: MetricDimensionProps): MetricDimensionProps { return (metricDimensionPropsProps) as unknown as MetricDimensionProps }

export interface MetricDimensionProps {
    name: Value<string>;
    value: Value<string>;
}