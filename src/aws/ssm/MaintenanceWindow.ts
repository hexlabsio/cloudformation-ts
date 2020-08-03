import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
export function maintenanceWindow(maintenanceWindowProps: MaintenanceWindow): MaintenanceWindow { return ({ ...maintenanceWindowProps, _logicalType: '' }) }
  
export interface MaintenanceWindow extends KloudResource {
  startDate?: Value<string>
  description?: Value<string>
  allowUnassociatedTargets: Value<boolean>
  cutoff: Value<number>
  schedule: Value<string>
  duration: Value<number>
  scheduleOffset?: Value<number>
  endDate?: Value<string>
  tags?: Tag[]
  name: Value<string>
  scheduleTimezone?: Value<string>
}