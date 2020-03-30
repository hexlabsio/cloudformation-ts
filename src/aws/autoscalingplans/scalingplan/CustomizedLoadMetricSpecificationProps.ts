import { Value } from '../../../kloudformation/Value';
import { MetricDimensionProps } from './MetricDimensionProps';

export function customizedLoadMetricSpecificationProps(customizedLoadMetricSpecificationPropsProps: CustomizedLoadMetricSpecificationProps): CustomizedLoadMetricSpecificationProps { return (customizedLoadMetricSpecificationPropsProps) as unknown as CustomizedLoadMetricSpecificationProps }

export interface CustomizedLoadMetricSpecificationProps {
    metricName: Value<string>;
    statistic: Value<string>;
    namespace: Value<string>;
    dimensions?: MetricDimensionProps[];
    unit?: Value<string>;
}