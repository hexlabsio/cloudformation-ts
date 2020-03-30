import { Value } from '../../kloudformation/Value';
import { AndroidPushNotificationTemplateProps } from './pushtemplate/AndroidPushNotificationTemplateProps';
import { APNSPushNotificationTemplateProps } from './pushtemplate/APNSPushNotificationTemplateProps';
import { DefaultPushNotificationTemplateProps } from './pushtemplate/DefaultPushNotificationTemplateProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function pushTemplate(pushTemplateProps: PushTemplate & { logicalName?: string }): PushTemplate { return ({ ...pushTemplateProps, _logicalType: 'AWS::Pinpoint::PushTemplate' }) as unknown as PushTemplate }

export interface PushTemplate extends KloudResource {
    templateName: Value<string>;
    gCM?: AndroidPushNotificationTemplateProps;
    baidu?: AndroidPushNotificationTemplateProps;
    aDM?: AndroidPushNotificationTemplateProps;
    aPNS?: APNSPushNotificationTemplateProps;
    templateDescription?: Value<string>;
    defaultSubstitutions?: Value<string>;
    default?: DefaultPushNotificationTemplateProps;
    tags?: Value<any>;
}