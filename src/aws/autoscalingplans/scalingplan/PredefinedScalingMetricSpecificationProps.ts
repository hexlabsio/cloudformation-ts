import { Value } from '../../../kloudformation/Value';

export function predefinedScalingMetricSpecificationProps(predefinedScalingMetricSpecificationPropsProps: PredefinedScalingMetricSpecificationProps): PredefinedScalingMetricSpecificationProps { return (predefinedScalingMetricSpecificationPropsProps) as unknown as PredefinedScalingMetricSpecificationProps }

export interface PredefinedScalingMetricSpecificationProps {
    predefinedScalingMetricType: Value<string>;
    resourceLabel?: Value<string>;
}