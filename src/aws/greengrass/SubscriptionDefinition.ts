import { Value } from '../../kloudformation/Value';
import { SubscriptionDefinitionVersionProps } from './subscriptiondefinition/SubscriptionDefinitionVersionProps';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type SubscriptionDefinitionAttributes = { LatestVersionArn: Attribute<string>; Id: Attribute<string>; Arn: Attribute<string>; Name: Attribute<string> }
export function subscriptionDefinition(subscriptionDefinitionProps: SubscriptionDefinition): SubscriptionDefinition & { attributes: SubscriptionDefinitionAttributes } { return ({ ...subscriptionDefinitionProps, _logicalType: 'AWS::Greengrass::SubscriptionDefinition', attributes: { LatestVersionArn: 'LatestVersionArn', Id: 'Id', Arn: 'Arn', Name: 'Name' } }) }

export interface SubscriptionDefinition extends KloudResource {
    name: Value<string>;
    initialVersion?: SubscriptionDefinitionVersionProps;
    tags?: Value<any>;
}