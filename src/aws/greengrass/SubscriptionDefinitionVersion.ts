import { Value } from '../../kloudformation/Value';
import { SubscriptionProps } from './subscriptionDefinitionVersion/SubscriptionProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function subscriptionDefinitionVersion(subscriptionDefinitionVersionProps: SubscriptionDefinitionVersion): SubscriptionDefinitionVersion { return ({ ...subscriptionDefinitionVersionProps, _logicalType: '' }) }
  
export interface SubscriptionDefinitionVersion extends KloudResource {
  subscriptionDefinitionId: Value<string>
  subscriptions: SubscriptionProps[]
}