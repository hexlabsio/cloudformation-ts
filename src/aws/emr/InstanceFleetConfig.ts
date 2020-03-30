import { Value } from '../../kloudformation/Value';
import { InstanceTypeConfigProps } from './instancefleetconfig/InstanceTypeConfigProps';
import { InstanceFleetProvisioningSpecificationsProps } from './instancefleetconfig/InstanceFleetProvisioningSpecificationsProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function instanceFleetConfig(instanceFleetConfigProps: InstanceFleetConfig & { logicalName?: string }): InstanceFleetConfig { return ({ ...instanceFleetConfigProps, _logicalType: 'AWS::EMR::InstanceFleetConfig' }) as unknown as InstanceFleetConfig }

export interface InstanceFleetConfig extends KloudResource {
    clusterId: Value<string>;
    instanceFleetType: Value<string>;
    instanceTypeConfigs?: InstanceTypeConfigProps[];
    launchSpecifications?: InstanceFleetProvisioningSpecificationsProps;
    name?: Value<string>;
    targetOnDemandCapacity?: Value<number>;
    targetSpotCapacity?: Value<number>;
}