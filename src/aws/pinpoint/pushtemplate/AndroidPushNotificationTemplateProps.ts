import { Value } from '../../../kloudformation/Value';

export function androidPushNotificationTemplateProps(androidPushNotificationTemplatePropsProps: AndroidPushNotificationTemplateProps): AndroidPushNotificationTemplateProps { return (androidPushNotificationTemplatePropsProps) as unknown as AndroidPushNotificationTemplateProps }

export interface AndroidPushNotificationTemplateProps {
    action?: Value<string>;
    imageUrl?: Value<string>;
    smallImageIconUrl?: Value<string>;
    title?: Value<string>;
    imageIconUrl?: Value<string>;
    sound?: Value<string>;
    body?: Value<string>;
    url?: Value<string>;
}