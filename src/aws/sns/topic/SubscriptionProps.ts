import { Value } from '../../../kloudformation/Value';

export function subscriptionProps(subscriptionPropsProps: SubscriptionProps): SubscriptionProps { return (subscriptionPropsProps) }

export interface SubscriptionProps {
    endpoint: Value<string>;
    protocol: Value<string>;
}