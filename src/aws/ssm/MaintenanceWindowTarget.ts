import { Value } from '../../kloudformation/Value';
import { TargetsProps } from './maintenancewindowtarget/TargetsProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function maintenanceWindowTarget(maintenanceWindowTargetProps: MaintenanceWindowTarget & { logicalName?: string }): MaintenanceWindowTarget { return ({ ...maintenanceWindowTargetProps, _logicalType: 'AWS::SSM::MaintenanceWindowTarget' }) as unknown as MaintenanceWindowTarget }

export interface MaintenanceWindowTarget extends KloudResource {
    windowId: Value<string>;
    resourceType: Value<string>;
    targets: TargetsProps[];
    ownerInformation?: Value<string>;
    description?: Value<string>;
    name?: Value<string>;
}