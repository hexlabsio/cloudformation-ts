import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type NotificationChannelAttributes = {  }
export function notificationChannel(notificationChannelProps: NotificationChannel): NotificationChannel & { attributes: NotificationChannelAttributes } { return ({ ...notificationChannelProps, _logicalType: 'AWS::FMS::NotificationChannel', attributes: {  } }) }

export interface NotificationChannel extends KloudResource {
    snsRoleName: Value<string>;
    snsTopicArn: Value<string>;
}