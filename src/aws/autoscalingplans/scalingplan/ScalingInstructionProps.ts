import { Value } from '../../../kloudformation/Value';
import { TargetTrackingConfigurationProps } from './TargetTrackingConfigurationProps';
import { CustomizedLoadMetricSpecificationProps } from './CustomizedLoadMetricSpecificationProps';
import { PredefinedLoadMetricSpecificationProps } from './PredefinedLoadMetricSpecificationProps';

export interface ScalingInstructionProps {
  disableDynamicScaling?: Value<boolean>
  serviceNamespace: Value<string>
  predictiveScalingMaxCapacityBehavior?: Value<string>
  scalableDimension: Value<string>
  scalingPolicyUpdateBehavior?: Value<string>
  minCapacity: Value<number>
  targetTrackingConfigurations: TargetTrackingConfigurationProps[]
  predictiveScalingMaxCapacityBuffer?: Value<number>
  customizedLoadMetricSpecification?: CustomizedLoadMetricSpecificationProps
  predefinedLoadMetricSpecification?: PredefinedLoadMetricSpecificationProps
  resourceId: Value<string>
  scheduledActionBufferTime?: Value<number>
  maxCapacity: Value<number>
  predictiveScalingMode?: Value<string>
}