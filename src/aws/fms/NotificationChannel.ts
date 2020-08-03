import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function notificationChannel(notificationChannelProps: NotificationChannel): NotificationChannel { return ({ ...notificationChannelProps, _logicalType: '' }) }
  
export interface NotificationChannel extends KloudResource {
  snsRoleName: Value<string>
  snsTopicArn: Value<string>
}