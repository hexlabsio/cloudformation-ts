import { Value } from '../../kloudformation/Value';
import { TargetsProps } from './maintenanceWindowTarget/TargetsProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function maintenanceWindowTarget(maintenanceWindowTargetProps: MaintenanceWindowTarget): MaintenanceWindowTarget { return ({ ...maintenanceWindowTargetProps, _logicalType: '' }) }
  
export interface MaintenanceWindowTarget extends KloudResource {
  ownerInformation?: Value<string>
  description?: Value<string>
  windowId: Value<string>
  resourceType: Value<string>
  targets: TargetsProps[]
  name?: Value<string>
}