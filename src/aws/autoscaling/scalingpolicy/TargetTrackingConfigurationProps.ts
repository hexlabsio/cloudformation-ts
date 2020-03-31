import { Value } from '../../../kloudformation/Value';
import { CustomizedMetricSpecificationProps } from './CustomizedMetricSpecificationProps';
import { PredefinedMetricSpecificationProps } from './PredefinedMetricSpecificationProps';

export function targetTrackingConfigurationProps(targetTrackingConfigurationPropsProps: TargetTrackingConfigurationProps): TargetTrackingConfigurationProps { return (targetTrackingConfigurationPropsProps) }

export interface TargetTrackingConfigurationProps {
    targetValue: Value<number>;
    customizedMetricSpecification?: CustomizedMetricSpecificationProps;
    disableScaleIn?: Value<boolean>;
    predefinedMetricSpecification?: PredefinedMetricSpecificationProps;
}