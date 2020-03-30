import { Value } from '../../../kloudformation/Value';

export function maintenanceWindowLambdaParametersProps(maintenanceWindowLambdaParametersPropsProps: MaintenanceWindowLambdaParametersProps): MaintenanceWindowLambdaParametersProps { return (maintenanceWindowLambdaParametersPropsProps) as unknown as MaintenanceWindowLambdaParametersProps }

export interface MaintenanceWindowLambdaParametersProps {
    clientContext?: Value<string>;
    qualifier?: Value<string>;
    payload?: Value<string>;
}