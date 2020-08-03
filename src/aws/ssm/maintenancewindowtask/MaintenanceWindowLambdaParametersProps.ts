import { Value } from '../../../kloudformation/Value';

export interface MaintenanceWindowLambdaParametersProps {
  clientContext?: Value<string>
  qualifier?: Value<string>
  payload?: Value<string>
}