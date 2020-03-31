import { Value } from '../../../kloudformation/Value';

export function maintenanceWindowLambdaParametersProps(maintenanceWindowLambdaParametersPropsProps: MaintenanceWindowLambdaParametersProps): MaintenanceWindowLambdaParametersProps { return (maintenanceWindowLambdaParametersPropsProps) }

export interface MaintenanceWindowLambdaParametersProps {
    clientContext?: Value<string>;
    qualifier?: Value<string>;
    payload?: Value<string>;
}