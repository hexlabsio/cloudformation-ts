import { Value } from '../../kloudformation/Value';
import { InstanceTypeConfigProps } from './instancefleetconfig/InstanceTypeConfigProps';
import { InstanceFleetProvisioningSpecificationsProps } from './instancefleetconfig/InstanceFleetProvisioningSpecificationsProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type InstanceFleetConfigAttributes = {  }
export function instanceFleetConfig(instanceFleetConfigProps: InstanceFleetConfig): InstanceFleetConfig & { attributes: InstanceFleetConfigAttributes } { return ({ ...instanceFleetConfigProps, _logicalType: 'AWS::EMR::InstanceFleetConfig', attributes: {  } }) }

export interface InstanceFleetConfig extends KloudResource {
    clusterId: Value<string>;
    instanceFleetType: Value<string>;
    instanceTypeConfigs?: InstanceTypeConfigProps[];
    launchSpecifications?: InstanceFleetProvisioningSpecificationsProps;
    name?: Value<string>;
    targetOnDemandCapacity?: Value<number>;
    targetSpotCapacity?: Value<number>;
}