import { InstanceTypeConfigProps } from './InstanceTypeConfigProps';
import { InstanceFleetProvisioningSpecificationsProps } from './InstanceFleetProvisioningSpecificationsProps';
import { Value } from '../../../kloudformation/Value';

export function instanceFleetConfigProps(instanceFleetConfigPropsProps: InstanceFleetConfigProps): InstanceFleetConfigProps { return (instanceFleetConfigPropsProps) }

export interface InstanceFleetConfigProps {
    instanceTypeConfigs?: InstanceTypeConfigProps[];
    launchSpecifications?: InstanceFleetProvisioningSpecificationsProps;
    name?: Value<string>;
    targetOnDemandCapacity?: Value<number>;
    targetSpotCapacity?: Value<number>;
}