import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function dashboard(dashboardProps: Dashboard & { logicalName?: string }): Dashboard { return ({ ...dashboardProps, _logicalType: 'AWS::CloudWatch::Dashboard' }) as unknown as Dashboard }

export interface Dashboard extends KloudResource {
    dashboardBody: Value<string>;
    dashboardName?: Value<string>;
}