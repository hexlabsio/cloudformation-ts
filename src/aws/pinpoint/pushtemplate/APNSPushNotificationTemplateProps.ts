import { Value } from '../../../kloudformation/Value';

export function aPNSPushNotificationTemplateProps(aPNSPushNotificationTemplatePropsProps: APNSPushNotificationTemplateProps): APNSPushNotificationTemplateProps { return (aPNSPushNotificationTemplatePropsProps) as unknown as APNSPushNotificationTemplateProps }

export interface APNSPushNotificationTemplateProps {
    action?: Value<string>;
    mediaUrl?: Value<string>;
    title?: Value<string>;
    sound?: Value<string>;
    body?: Value<string>;
    url?: Value<string>;
}