import { MetricProps } from './MetricProps';
import { Value } from '../../../kloudformation/Value';

export function metricStatProps(metricStatPropsProps: MetricStatProps): MetricStatProps { return (metricStatPropsProps) }

export interface MetricStatProps {
    metric: MetricProps;
    period: Value<number>;
    stat: Value<string>;
    unit?: Value<string>;
}