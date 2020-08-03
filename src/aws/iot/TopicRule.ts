import { Value } from '../../kloudformation/Value';
import { TopicRulePayloadProps } from './topicRule/TopicRulePayloadProps';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type TopicRuleAttributes = { Arn: Attribute<string> }
export function topicRule(topicRuleProps: TopicRule): TopicRule & {attributes: TopicRuleAttributes} { return ({ ...topicRuleProps, _logicalType: 'AWS::IoT::TopicRule', attributes: { Arn: 'Arn' } }) }
   
export interface TopicRule extends KloudResource {
  ruleName?: Value<string>
  topicRulePayload: TopicRulePayloadProps
}