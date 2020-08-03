import { Value } from '../../kloudformation/Value';
import { InstanceTypeConfigProps } from './instanceFleetConfig/InstanceTypeConfigProps';
import { InstanceFleetProvisioningSpecificationsProps } from './instanceFleetConfig/InstanceFleetProvisioningSpecificationsProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function instanceFleetConfig(instanceFleetConfigProps: InstanceFleetConfig): InstanceFleetConfig { return ({ ...instanceFleetConfigProps, _logicalType: '' }) }
  
export interface InstanceFleetConfig extends KloudResource {
  clusterId: Value<string>
  instanceFleetType: Value<string>
  instanceTypeConfigs?: InstanceTypeConfigProps[]
  launchSpecifications?: InstanceFleetProvisioningSpecificationsProps
  name?: Value<string>
  targetOnDemandCapacity?: Value<number>
  targetSpotCapacity?: Value<number>
}