import { Value } from '../../../kloudformation/Value';

export interface NotificationConfigProps {
  notificationArn: Value<string>
  notificationType?: Value<string>
  notificationEvents?: Value<Value<string>[]>
}