import { Value } from '../../../kloudformation/Value';

export function webhookFilterProps(webhookFilterPropsProps: WebhookFilterProps): WebhookFilterProps { return (webhookFilterPropsProps) as unknown as WebhookFilterProps }

export interface WebhookFilterProps {
    pattern: Value<string>;
    type: Value<string>;
    excludeMatchedPattern?: Value<boolean>;
}