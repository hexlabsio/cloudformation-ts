import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function dashboard(dashboardProps: Dashboard): Dashboard { return ({ ...dashboardProps, _logicalType: '' }) }
  
export interface Dashboard extends KloudResource {
  dashboardName?: Value<string>
  dashboardBody: Value<string>
}