import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type DashboardAttributes = {  }
export function dashboard(dashboardProps: Dashboard): Dashboard & { attributes: DashboardAttributes } { return ({ ...dashboardProps, _logicalType: 'AWS::CloudWatch::Dashboard', attributes: {  } }) }

export interface Dashboard extends KloudResource {
    dashboardBody: Value<string>;
    dashboardName?: Value<string>;
}