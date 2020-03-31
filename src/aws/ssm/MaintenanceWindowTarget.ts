import { Value } from '../../kloudformation/Value';
import { TargetsProps } from './maintenancewindowtarget/TargetsProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type MaintenanceWindowTargetAttributes = {  }
export function maintenanceWindowTarget(maintenanceWindowTargetProps: MaintenanceWindowTarget): MaintenanceWindowTarget & { attributes: MaintenanceWindowTargetAttributes } { return ({ ...maintenanceWindowTargetProps, _logicalType: 'AWS::SSM::MaintenanceWindowTarget', attributes: {  } }) }

export interface MaintenanceWindowTarget extends KloudResource {
    windowId: Value<string>;
    resourceType: Value<string>;
    targets: TargetsProps[];
    ownerInformation?: Value<string>;
    description?: Value<string>;
    name?: Value<string>;
}