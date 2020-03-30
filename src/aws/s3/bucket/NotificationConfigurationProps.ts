import { LambdaConfigurationProps } from './LambdaConfigurationProps';
import { QueueConfigurationProps } from './QueueConfigurationProps';
import { TopicConfigurationProps } from './TopicConfigurationProps';

export function notificationConfigurationProps(notificationConfigurationPropsProps: NotificationConfigurationProps): NotificationConfigurationProps { return (notificationConfigurationPropsProps) as unknown as NotificationConfigurationProps }

export interface NotificationConfigurationProps {
    lambdaConfigurations?: LambdaConfigurationProps[];
    queueConfigurations?: QueueConfigurationProps[];
    topicConfigurations?: TopicConfigurationProps[];
}