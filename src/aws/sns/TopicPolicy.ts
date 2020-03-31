import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type TopicPolicyAttributes = {  }
export function topicPolicy(topicPolicyProps: TopicPolicy): TopicPolicy & { attributes: TopicPolicyAttributes } { return ({ ...topicPolicyProps, _logicalType: 'AWS::SNS::TopicPolicy', attributes: {  } }) }

export interface TopicPolicy extends KloudResource {
    policyDocument: Value<any>;
    topics: Value<Value<string>[]>;
}