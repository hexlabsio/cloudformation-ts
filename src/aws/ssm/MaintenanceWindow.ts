import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export type MaintenanceWindowAttributes = {  }
export function maintenanceWindow(maintenanceWindowProps: MaintenanceWindow): MaintenanceWindow & { attributes: MaintenanceWindowAttributes } { return ({ ...maintenanceWindowProps, _logicalType: 'AWS::SSM::MaintenanceWindow', attributes: {  } }) }

export interface MaintenanceWindow extends KloudResource {
    allowUnassociatedTargets: Value<boolean>;
    cutoff: Value<number>;
    schedule: Value<string>;
    duration: Value<number>;
    name: Value<string>;
    startDate?: Value<string>;
    description?: Value<string>;
    endDate?: Value<string>;
    tags?: Tag[];
    scheduleTimezone?: Value<string>;
}