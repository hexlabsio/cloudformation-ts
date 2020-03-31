import { TopicRulePayloadProps } from './topicrule/TopicRulePayloadProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type TopicRuleAttributes = { Arn: Attribute<string> }
export function topicRule(topicRuleProps: TopicRule): TopicRule & { attributes: TopicRuleAttributes } { return ({ ...topicRuleProps, _logicalType: 'AWS::IoT::TopicRule', attributes: { Arn: 'Arn' } }) }

export interface TopicRule extends KloudResource {
    topicRulePayload: TopicRulePayloadProps;
    ruleName?: Value<string>;
}