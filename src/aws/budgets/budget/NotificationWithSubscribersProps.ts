import { SubscriberProps } from './SubscriberProps';
import { NotificationProps } from './NotificationProps';

export function notificationWithSubscribersProps(notificationWithSubscribersPropsProps: NotificationWithSubscribersProps): NotificationWithSubscribersProps { return (notificationWithSubscribersPropsProps) as unknown as NotificationWithSubscribersProps }

export interface NotificationWithSubscribersProps {
    subscribers: SubscriberProps[];
    notification: NotificationProps;
}