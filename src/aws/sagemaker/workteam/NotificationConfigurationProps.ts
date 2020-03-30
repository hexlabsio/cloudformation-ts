import { Value } from '../../../kloudformation/Value';

export function notificationConfigurationProps(notificationConfigurationPropsProps: NotificationConfigurationProps): NotificationConfigurationProps { return (notificationConfigurationPropsProps) as unknown as NotificationConfigurationProps }

export interface NotificationConfigurationProps {
    notificationTopicArn: Value<string>;
}