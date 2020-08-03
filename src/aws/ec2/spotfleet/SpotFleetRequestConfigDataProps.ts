import { Value } from '../../../kloudformation/Value';
import { SpotFleetLaunchSpecificationProps } from './SpotFleetLaunchSpecificationProps';
import { LaunchTemplateConfigProps } from './LaunchTemplateConfigProps';
import { LoadBalancersConfigProps } from './LoadBalancersConfigProps';

export interface SpotFleetRequestConfigDataProps {
  allocationStrategy?: Value<string>
  excessCapacityTerminationPolicy?: Value<string>
  iamFleetRole: Value<string>
  instanceInterruptionBehavior?: Value<string>
  launchSpecifications?: SpotFleetLaunchSpecificationProps[]
  launchTemplateConfigs?: LaunchTemplateConfigProps[]
  loadBalancersConfig?: LoadBalancersConfigProps
  replaceUnhealthyInstances?: Value<boolean>
  spotPrice?: Value<string>
  targetCapacity: Value<number>
  terminateInstancesWithExpiration?: Value<boolean>
  type?: Value<string>
  validFrom?: Value<string>
  validUntil?: Value<string>
}