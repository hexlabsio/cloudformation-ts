import { DimensionProps } from './DimensionProps';
import { Value } from '../../../kloudformation/Value';

export function metricProps(metricPropsProps: MetricProps): MetricProps { return (metricPropsProps) }

export interface MetricProps {
    dimensions?: DimensionProps[];
    metricName?: Value<string>;
    namespace?: Value<string>;
}