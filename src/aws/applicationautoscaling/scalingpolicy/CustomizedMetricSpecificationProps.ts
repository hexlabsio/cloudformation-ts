import { Value } from '../../../kloudformation/Value';
import { MetricDimensionProps } from '../../autoscaling/scalingpolicy/MetricDimensionProps';

export function customizedMetricSpecificationProps(customizedMetricSpecificationPropsProps: CustomizedMetricSpecificationProps): CustomizedMetricSpecificationProps { return (customizedMetricSpecificationPropsProps) as unknown as CustomizedMetricSpecificationProps }

export interface CustomizedMetricSpecificationProps {
    metricName: Value<string>;
    namespace: Value<string>;
    statistic: Value<string>;
    dimensions?: MetricDimensionProps[];
    unit?: Value<string>;
}