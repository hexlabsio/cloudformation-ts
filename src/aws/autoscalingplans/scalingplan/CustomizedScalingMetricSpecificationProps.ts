import { Value } from '../../../kloudformation/Value';
import { MetricDimensionProps } from './MetricDimensionProps';

export function customizedScalingMetricSpecificationProps(customizedScalingMetricSpecificationPropsProps: CustomizedScalingMetricSpecificationProps): CustomizedScalingMetricSpecificationProps { return (customizedScalingMetricSpecificationPropsProps) as unknown as CustomizedScalingMetricSpecificationProps }

export interface CustomizedScalingMetricSpecificationProps {
    metricName: Value<string>;
    statistic: Value<string>;
    namespace: Value<string>;
    dimensions?: MetricDimensionProps[];
    unit?: Value<string>;
}