import { Value } from '../../../kloudformation/Value';

export function webhookAuthConfigurationProps(webhookAuthConfigurationPropsProps: WebhookAuthConfigurationProps): WebhookAuthConfigurationProps { return (webhookAuthConfigurationPropsProps) as unknown as WebhookAuthConfigurationProps }

export interface WebhookAuthConfigurationProps {
    allowedIPRange?: Value<string>;
    secretToken?: Value<string>;
}