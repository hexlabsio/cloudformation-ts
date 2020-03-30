import { MaintenanceWindowRunCommandParametersProps } from './MaintenanceWindowRunCommandParametersProps';
import { MaintenanceWindowAutomationParametersProps } from './MaintenanceWindowAutomationParametersProps';
import { MaintenanceWindowStepFunctionsParametersProps } from './MaintenanceWindowStepFunctionsParametersProps';
import { MaintenanceWindowLambdaParametersProps } from './MaintenanceWindowLambdaParametersProps';

export function taskInvocationParametersProps(taskInvocationParametersPropsProps: TaskInvocationParametersProps): TaskInvocationParametersProps { return (taskInvocationParametersPropsProps) as unknown as TaskInvocationParametersProps }

export interface TaskInvocationParametersProps {
    maintenanceWindowRunCommandParameters?: MaintenanceWindowRunCommandParametersProps;
    maintenanceWindowAutomationParameters?: MaintenanceWindowAutomationParametersProps;
    maintenanceWindowStepFunctionsParameters?: MaintenanceWindowStepFunctionsParametersProps;
    maintenanceWindowLambdaParameters?: MaintenanceWindowLambdaParametersProps;
}