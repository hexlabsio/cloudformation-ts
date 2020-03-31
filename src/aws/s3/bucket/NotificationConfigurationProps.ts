import { LambdaConfigurationProps } from './LambdaConfigurationProps';
import { QueueConfigurationProps } from './QueueConfigurationProps';
import { TopicConfigurationProps } from './TopicConfigurationProps';

export function notificationConfigurationProps(notificationConfigurationPropsProps: NotificationConfigurationProps): NotificationConfigurationProps { return (notificationConfigurationPropsProps) }

export interface NotificationConfigurationProps {
    lambdaConfigurations?: LambdaConfigurationProps[];
    queueConfigurations?: QueueConfigurationProps[];
    topicConfigurations?: TopicConfigurationProps[];
}