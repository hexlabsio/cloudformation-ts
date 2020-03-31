import { Value } from '../../../kloudformation/Value';
import { NotificationFilterProps } from './NotificationFilterProps';

export function topicConfigurationProps(topicConfigurationPropsProps: TopicConfigurationProps): TopicConfigurationProps { return (topicConfigurationPropsProps) }

export interface TopicConfigurationProps {
    event: Value<string>;
    topic: Value<string>;
    filter?: NotificationFilterProps;
}