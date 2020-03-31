import { Value } from '../../kloudformation/Value';
import { SubscriptionProps } from './subscriptiondefinitionversion/SubscriptionProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type SubscriptionDefinitionVersionAttributes = {  }
export function subscriptionDefinitionVersion(subscriptionDefinitionVersionProps: SubscriptionDefinitionVersion): SubscriptionDefinitionVersion & { attributes: SubscriptionDefinitionVersionAttributes } { return ({ ...subscriptionDefinitionVersionProps, _logicalType: 'AWS::Greengrass::SubscriptionDefinitionVersion', attributes: {  } }) }

export interface SubscriptionDefinitionVersion extends KloudResource {
    subscriptionDefinitionId: Value<string>;
    subscriptions: SubscriptionProps[];
}