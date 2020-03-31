import { Value } from '../../../kloudformation/Value';

export function notificationConfigurationProps(notificationConfigurationPropsProps: NotificationConfigurationProps): NotificationConfigurationProps { return (notificationConfigurationPropsProps) }

export interface NotificationConfigurationProps {
    topicARN: Value<string>;
    notificationTypes?: Value<Value<string>[]>;
}