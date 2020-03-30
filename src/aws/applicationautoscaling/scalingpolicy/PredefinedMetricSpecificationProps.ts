import { Value } from '../../../kloudformation/Value';

export function predefinedMetricSpecificationProps(predefinedMetricSpecificationPropsProps: PredefinedMetricSpecificationProps): PredefinedMetricSpecificationProps { return (predefinedMetricSpecificationPropsProps) as unknown as PredefinedMetricSpecificationProps }

export interface PredefinedMetricSpecificationProps {
    predefinedMetricType: Value<string>;
    resourceLabel?: Value<string>;
}