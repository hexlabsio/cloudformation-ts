import { Value } from '../../../kloudformation/Value';

export function subscriptionProps(subscriptionPropsProps: SubscriptionProps): SubscriptionProps { return (subscriptionPropsProps) as unknown as SubscriptionProps }

export interface SubscriptionProps {
    target: Value<string>;
    id: Value<string>;
    source: Value<string>;
    subject: Value<string>;
}