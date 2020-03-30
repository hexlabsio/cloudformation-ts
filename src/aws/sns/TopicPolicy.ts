import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function topicPolicy(topicPolicyProps: TopicPolicy & { logicalName?: string }): TopicPolicy { return ({ ...topicPolicyProps, _logicalType: 'AWS::SNS::TopicPolicy' }) as unknown as TopicPolicy }

export interface TopicPolicy extends KloudResource {
    policyDocument: Value<any>;
    topics: Value<Value<string>[]>;
}