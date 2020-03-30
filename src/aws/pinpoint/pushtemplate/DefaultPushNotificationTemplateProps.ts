import { Value } from '../../../kloudformation/Value';

export function defaultPushNotificationTemplateProps(defaultPushNotificationTemplatePropsProps: DefaultPushNotificationTemplateProps): DefaultPushNotificationTemplateProps { return (defaultPushNotificationTemplatePropsProps) as unknown as DefaultPushNotificationTemplateProps }

export interface DefaultPushNotificationTemplateProps {
    action?: Value<string>;
    title?: Value<string>;
    sound?: Value<string>;
    body?: Value<string>;
    url?: Value<string>;
}