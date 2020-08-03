import { Value } from '../../../kloudformation/Value';

export interface MaintenanceWindowProps {
  dayOfWeek: Value<string>
  timeOfDay: Value<string>
  timeZone: Value<string>
}