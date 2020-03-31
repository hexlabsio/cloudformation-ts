import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type LaunchNotificationConstraintAttributes = {  }
export function launchNotificationConstraint(launchNotificationConstraintProps: LaunchNotificationConstraint): LaunchNotificationConstraint & { attributes: LaunchNotificationConstraintAttributes } { return ({ ...launchNotificationConstraintProps, _logicalType: 'AWS::ServiceCatalog::LaunchNotificationConstraint', attributes: {  } }) }

export interface LaunchNotificationConstraint extends KloudResource {
    notificationArns: Value<Value<string>[]>;
    portfolioId: Value<string>;
    productId: Value<string>;
    description?: Value<string>;
    acceptLanguage?: Value<string>;
}