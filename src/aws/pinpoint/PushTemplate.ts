import { Value } from '../../kloudformation/Value';
import { AndroidPushNotificationTemplateProps } from './pushtemplate/AndroidPushNotificationTemplateProps';
import { APNSPushNotificationTemplateProps } from './pushtemplate/APNSPushNotificationTemplateProps';
import { DefaultPushNotificationTemplateProps } from './pushtemplate/DefaultPushNotificationTemplateProps';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type PushTemplateAttributes = { Arn: Attribute<string> }
export function pushTemplate(pushTemplateProps: PushTemplate): PushTemplate & { attributes: PushTemplateAttributes } { return ({ ...pushTemplateProps, _logicalType: 'AWS::Pinpoint::PushTemplate', attributes: { Arn: 'Arn' } }) }

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