import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function launchNotificationConstraint(launchNotificationConstraintProps: LaunchNotificationConstraint & { logicalName?: string }): LaunchNotificationConstraint { return ({ ...launchNotificationConstraintProps, _logicalType: 'AWS::ServiceCatalog::LaunchNotificationConstraint' }) as unknown as LaunchNotificationConstraint }

export interface LaunchNotificationConstraint extends KloudResource {
    notificationArns: Value<Value<string>[]>;
    portfolioId: Value<string>;
    productId: Value<string>;
    description?: Value<string>;
    acceptLanguage?: Value<string>;
}