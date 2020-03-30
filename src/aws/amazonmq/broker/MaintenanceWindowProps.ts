import { Value } from '../../../kloudformation/Value';

export function maintenanceWindowProps(maintenanceWindowPropsProps: MaintenanceWindowProps): MaintenanceWindowProps { return (maintenanceWindowPropsProps) as unknown as MaintenanceWindowProps }

export interface MaintenanceWindowProps {
    dayOfWeek: Value<string>;
    timeOfDay: Value<string>;
    timeZone: Value<string>;
}