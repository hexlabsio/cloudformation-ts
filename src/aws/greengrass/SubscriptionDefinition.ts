import { Value } from '../../kloudformation/Value';
import { SubscriptionDefinitionVersionProps } from './subscriptiondefinition/SubscriptionDefinitionVersionProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function subscriptionDefinition(subscriptionDefinitionProps: SubscriptionDefinition & { logicalName?: string }): SubscriptionDefinition { return ({ ...subscriptionDefinitionProps, _logicalType: 'AWS::Greengrass::SubscriptionDefinition' }) as unknown as SubscriptionDefinition }

export interface SubscriptionDefinition extends KloudResource {
    name: Value<string>;
    initialVersion?: SubscriptionDefinitionVersionProps;
    tags?: Value<any>;
}