import { Value } from '../../../kloudformation/Value';

export function predefinedLoadMetricSpecificationProps(predefinedLoadMetricSpecificationPropsProps: PredefinedLoadMetricSpecificationProps): PredefinedLoadMetricSpecificationProps { return (predefinedLoadMetricSpecificationPropsProps) }

export interface PredefinedLoadMetricSpecificationProps {
    predefinedLoadMetricType: Value<string>;
    resourceLabel?: Value<string>;
}