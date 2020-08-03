import { Value } from '../../kloudformation/Value';
import { PolicyDocument } from '../../kloudformation/iam/PolicyDocument';
import { KloudResource } from '../../kloudformation/KloudResource';
export function topicPolicy(topicPolicyProps: TopicPolicy): TopicPolicy { return ({ ...topicPolicyProps, _logicalType: '' }) }
  
export interface TopicPolicy extends KloudResource {
  policyDocument: Value<PolicyDocument>
  topics: Value<Value<string>[]>
}