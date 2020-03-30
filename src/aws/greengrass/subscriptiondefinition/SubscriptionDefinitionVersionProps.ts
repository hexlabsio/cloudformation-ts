import { SubscriptionProps } from './SubscriptionProps';

export function subscriptionDefinitionVersionProps(subscriptionDefinitionVersionPropsProps: SubscriptionDefinitionVersionProps): SubscriptionDefinitionVersionProps { return (subscriptionDefinitionVersionPropsProps) as unknown as SubscriptionDefinitionVersionProps }

export interface SubscriptionDefinitionVersionProps {
    subscriptions: SubscriptionProps[];
}