import { SubscriberProps } from './SubscriberProps';
import { NotificationProps } from './NotificationProps';

export interface NotificationWithSubscribersProps {
  subscribers: SubscriberProps[]
  notification: NotificationProps
}