import { Value } from '../../../kloudformation/Value';

export function defaultPushNotificationTemplateProps(defaultPushNotificationTemplatePropsProps: DefaultPushNotificationTemplateProps): DefaultPushNotificationTemplateProps { return (defaultPushNotificationTemplatePropsProps) }

export interface DefaultPushNotificationTemplateProps {
    action?: Value<string>;
    title?: Value<string>;
    sound?: Value<string>;
    body?: Value<string>;
    url?: Value<string>;
}