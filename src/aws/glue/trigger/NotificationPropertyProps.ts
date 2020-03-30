import { Value } from '../../../kloudformation/Value';

export function notificationPropertyProps(notificationPropertyPropsProps: NotificationPropertyProps): NotificationPropertyProps { return (notificationPropertyPropsProps) as unknown as NotificationPropertyProps }

export interface NotificationPropertyProps {
    notifyDelayAfter?: Value<number>;
}