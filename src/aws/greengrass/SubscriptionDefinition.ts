import { SubscriptionDefinitionVersionProps } from './subscriptionDefinition/SubscriptionDefinitionVersionProps';
import { Value } from '../../kloudformation/Value';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type SubscriptionDefinitionAttributes = { LatestVersionArn: Attribute<string>;Id: Attribute<string>;Arn: Attribute<string>;Name: Attribute<string> }
export function subscriptionDefinition(subscriptionDefinitionProps: SubscriptionDefinition): SubscriptionDefinition & {attributes: SubscriptionDefinitionAttributes} { return ({ ...subscriptionDefinitionProps, _logicalType: 'AWS::Greengrass::SubscriptionDefinition', attributes: { LatestVersionArn: 'LatestVersionArn',Id: 'Id',Arn: 'Arn',Name: 'Name' } }) }
   
export interface SubscriptionDefinition extends KloudResource {
  initialVersion?: SubscriptionDefinitionVersionProps
  tags?: Value<any>
  name: Value<string>
}