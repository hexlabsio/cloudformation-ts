import { Value } from '../../../kloudformation/Value';

export function notificationPropertyProps(notificationPropertyPropsProps: NotificationPropertyProps): NotificationPropertyProps { return (notificationPropertyPropsProps) }

export interface NotificationPropertyProps {
    notifyDelayAfter?: Value<number>;
}