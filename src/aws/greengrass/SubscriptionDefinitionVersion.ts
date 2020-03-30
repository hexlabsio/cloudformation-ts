import { Value } from '../../kloudformation/Value';
import { SubscriptionProps } from './subscriptiondefinitionversion/SubscriptionProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function subscriptionDefinitionVersion(subscriptionDefinitionVersionProps: SubscriptionDefinitionVersion & { logicalName?: string }): SubscriptionDefinitionVersion { return ({ ...subscriptionDefinitionVersionProps, _logicalType: 'AWS::Greengrass::SubscriptionDefinitionVersion' }) as unknown as SubscriptionDefinitionVersion }

export interface SubscriptionDefinitionVersion extends KloudResource {
    subscriptionDefinitionId: Value<string>;
    subscriptions: SubscriptionProps[];
}