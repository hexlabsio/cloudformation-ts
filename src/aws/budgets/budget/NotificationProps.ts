import { Value } from '../../../kloudformation/Value';

export function notificationProps(notificationPropsProps: NotificationProps): NotificationProps { return (notificationPropsProps) }

export interface NotificationProps {
    comparisonOperator: Value<string>;
    notificationType: Value<string>;
    threshold: Value<number>;
    thresholdType?: Value<string>;
}