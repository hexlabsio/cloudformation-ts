import { Value } from '../../../kloudformation/Value';
import { NotificationFilterProps } from './NotificationFilterProps';

export interface TopicConfigurationProps {
  event: Value<string>
  filter?: NotificationFilterProps
  topic: Value<string>
}