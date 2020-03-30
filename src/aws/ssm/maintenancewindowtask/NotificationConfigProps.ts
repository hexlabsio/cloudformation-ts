import { Value } from '../../../kloudformation/Value';

export function notificationConfigProps(notificationConfigPropsProps: NotificationConfigProps): NotificationConfigProps { return (notificationConfigPropsProps) as unknown as NotificationConfigProps }

export interface NotificationConfigProps {
    notificationArn: Value<string>;
    notificationType?: Value<string>;
    notificationEvents?: Value<Value<string>[]>;
}