import { Value } from '../../../kloudformation/Value';

export function subscriptionProps(subscriptionPropsProps: SubscriptionProps): SubscriptionProps { return (subscriptionPropsProps) as unknown as SubscriptionProps }

export interface SubscriptionProps {
    endpoint: Value<string>;
    protocol: Value<string>;
}