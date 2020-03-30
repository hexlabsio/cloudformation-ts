import { Value } from '../../../kloudformation/Value';

export function metricDimensionProps(metricDimensionPropsProps: MetricDimensionProps): MetricDimensionProps { return (metricDimensionPropsProps) as unknown as MetricDimensionProps }

export interface MetricDimensionProps {
    value: Value<string>;
    name: Value<string>;
}