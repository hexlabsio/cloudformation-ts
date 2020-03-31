import { Value } from '../../../kloudformation/Value';
import { MetricStatProps } from './MetricStatProps';

export function metricDataQueryProps(metricDataQueryPropsProps: MetricDataQueryProps): MetricDataQueryProps { return (metricDataQueryPropsProps) }

export interface MetricDataQueryProps {
    id: Value<string>;
    expression?: Value<string>;
    label?: Value<string>;
    metricStat?: MetricStatProps;
    returnData?: Value<boolean>;
}