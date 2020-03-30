import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function notificationChannel(notificationChannelProps: NotificationChannel & { logicalName?: string }): NotificationChannel { return ({ ...notificationChannelProps, _logicalType: 'AWS::FMS::NotificationChannel' }) as unknown as NotificationChannel }

export interface NotificationChannel extends KloudResource {
    snsRoleName: Value<string>;
    snsTopicArn: Value<string>;
}