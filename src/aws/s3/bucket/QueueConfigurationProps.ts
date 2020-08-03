import { Value } from '../../../kloudformation/Value';
import { NotificationFilterProps } from './NotificationFilterProps';

export interface QueueConfigurationProps {
  event: Value<string>
  filter?: NotificationFilterProps
  queue: Value<string>
}