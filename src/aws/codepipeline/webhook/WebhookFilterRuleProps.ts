import { Value } from '../../../kloudformation/Value';

export function webhookFilterRuleProps(webhookFilterRulePropsProps: WebhookFilterRuleProps): WebhookFilterRuleProps { return (webhookFilterRulePropsProps) as unknown as WebhookFilterRuleProps }

export interface WebhookFilterRuleProps {
    jsonPath: Value<string>;
    matchEquals?: Value<string>;
}