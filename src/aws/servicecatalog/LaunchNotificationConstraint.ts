import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function launchNotificationConstraint(launchNotificationConstraintProps: LaunchNotificationConstraint): LaunchNotificationConstraint { return ({ ...launchNotificationConstraintProps, _logicalType: '' }) }
  
export interface LaunchNotificationConstraint extends KloudResource {
  description?: Value<string>
  notificationArns: Value<Value<string>[]>
  acceptLanguage?: Value<string>
  portfolioId: Value<string>
  productId: Value<string>
}