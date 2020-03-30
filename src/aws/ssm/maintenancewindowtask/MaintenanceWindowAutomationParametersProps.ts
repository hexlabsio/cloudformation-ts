import { Value } from '../../../kloudformation/Value';

export function maintenanceWindowAutomationParametersProps(maintenanceWindowAutomationParametersPropsProps: MaintenanceWindowAutomationParametersProps): MaintenanceWindowAutomationParametersProps { return (maintenanceWindowAutomationParametersPropsProps) as unknown as MaintenanceWindowAutomationParametersProps }

export interface MaintenanceWindowAutomationParametersProps {
    parameters?: Value<any>;
    documentVersion?: Value<string>;
}