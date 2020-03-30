import { TopicRulePayloadProps } from './topicrule/TopicRulePayloadProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function topicRule(topicRuleProps: TopicRule & { logicalName?: string }): TopicRule { return ({ ...topicRuleProps, _logicalType: 'AWS::IoT::TopicRule' }) as unknown as TopicRule }

export interface TopicRule extends KloudResource {
    topicRulePayload: TopicRulePayloadProps;
    ruleName?: Value<string>;
}