import { Value } from '../../../kloudformation/Value';

export function subscriberProps(subscriberPropsProps: SubscriberProps): SubscriberProps { return (subscriberPropsProps) }

export interface SubscriberProps {
    subscriptionType: Value<string>;
    address: Value<string>;
}