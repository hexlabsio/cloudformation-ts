import { Value } from '../../kloudformation/Value';
import { TargetProps } from './notificationRule/TargetProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function notificationRule(notificationRuleProps: NotificationRule): NotificationRule { return ({ ...notificationRuleProps, _logicalType: '' }) }
  
export interface NotificationRule extends KloudResource {
  eventTypeIds: Value<Value<string>[]>
  status?: Value<string>
  detailType: Value<string>
  resource: Value<string>
  targets: TargetProps[]
  tags?: Value<any>
  name: Value<string>
}