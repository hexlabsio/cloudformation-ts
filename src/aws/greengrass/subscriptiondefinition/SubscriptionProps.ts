import { Value } from '../../../kloudformation/Value';

export function subscriptionProps(subscriptionPropsProps: SubscriptionProps): SubscriptionProps { return (subscriptionPropsProps) }

export interface SubscriptionProps {
    target: Value<string>;
    id: Value<string>;
    source: Value<string>;
    subject: Value<string>;
}