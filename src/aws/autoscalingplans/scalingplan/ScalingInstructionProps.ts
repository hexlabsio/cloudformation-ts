import { Value } from '../../../kloudformation/Value';
import { TargetTrackingConfigurationProps } from './TargetTrackingConfigurationProps';
import { CustomizedLoadMetricSpecificationProps } from './CustomizedLoadMetricSpecificationProps';
import { PredefinedLoadMetricSpecificationProps } from './PredefinedLoadMetricSpecificationProps';

export function scalingInstructionProps(scalingInstructionPropsProps: ScalingInstructionProps): ScalingInstructionProps { return (scalingInstructionPropsProps) as unknown as ScalingInstructionProps }

export interface ScalingInstructionProps {
    serviceNamespace: Value<string>;
    scalableDimension: Value<string>;
    minCapacity: Value<number>;
    targetTrackingConfigurations: TargetTrackingConfigurationProps[];
    resourceId: Value<string>;
    maxCapacity: Value<number>;
    disableDynamicScaling?: Value<boolean>;
    predictiveScalingMaxCapacityBehavior?: Value<string>;
    scalingPolicyUpdateBehavior?: Value<string>;
    predictiveScalingMaxCapacityBuffer?: Value<number>;
    customizedLoadMetricSpecification?: CustomizedLoadMetricSpecificationProps;
    predefinedLoadMetricSpecification?: PredefinedLoadMetricSpecificationProps;
    scheduledActionBufferTime?: Value<number>;
    predictiveScalingMode?: Value<string>;
}