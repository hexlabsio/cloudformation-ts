import { LambdaConfigurationProps } from './LambdaConfigurationProps';
import { QueueConfigurationProps } from './QueueConfigurationProps';
import { TopicConfigurationProps } from './TopicConfigurationProps';

export interface NotificationConfigurationProps {
  lambdaConfigurations?: LambdaConfigurationProps[]
  queueConfigurations?: QueueConfigurationProps[]
  topicConfigurations?: TopicConfigurationProps[]
}