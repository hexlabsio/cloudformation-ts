import { Value } from '../../../kloudformation/Value';

export function notificationConfigProps(notificationConfigPropsProps: NotificationConfigProps): NotificationConfigProps { return (notificationConfigPropsProps) }

export interface NotificationConfigProps {
    notificationArn: Value<string>;
    notificationType?: Value<string>;
    notificationEvents?: Value<Value<string>[]>;
}