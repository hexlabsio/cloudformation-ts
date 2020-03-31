import { Value } from '../../../kloudformation/Value';
import { SpotFleetLaunchSpecificationProps } from './SpotFleetLaunchSpecificationProps';
import { LaunchTemplateConfigProps } from './LaunchTemplateConfigProps';
import { LoadBalancersConfigProps } from './LoadBalancersConfigProps';

export function spotFleetRequestConfigDataProps(spotFleetRequestConfigDataPropsProps: SpotFleetRequestConfigDataProps): SpotFleetRequestConfigDataProps { return (spotFleetRequestConfigDataPropsProps) }

export interface SpotFleetRequestConfigDataProps {
    iamFleetRole: Value<string>;
    targetCapacity: Value<number>;
    allocationStrategy?: Value<string>;
    excessCapacityTerminationPolicy?: Value<string>;
    instanceInterruptionBehavior?: Value<string>;
    launchSpecifications?: SpotFleetLaunchSpecificationProps[];
    launchTemplateConfigs?: LaunchTemplateConfigProps[];
    loadBalancersConfig?: LoadBalancersConfigProps;
    replaceUnhealthyInstances?: Value<boolean>;
    spotPrice?: Value<string>;
    terminateInstancesWithExpiration?: Value<boolean>;
    type?: Value<string>;
    validFrom?: Value<string>;
    validUntil?: Value<string>;
}