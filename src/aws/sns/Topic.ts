import { Value } from '../../kloudformation/Value';
import { SubscriptionProps } from './topic/SubscriptionProps';
import { Tag } from '../Tag';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type TopicAttributes = { TopicName: Attribute<string> }
export function topic(topicProps: Topic): Topic & {attributes: TopicAttributes} { return ({ ...topicProps, _logicalType: 'AWS::SNS::Topic', attributes: { TopicName: 'TopicName' } }) }
   
export interface Topic extends KloudResource {
  contentBasedDeduplication?: Value<boolean>
  displayName?: Value<string>
  fifoTopic?: Value<boolean>
  kmsMasterKeyId?: Value<string>
  subscription?: SubscriptionProps[]
  tags?: Tag[]
  topicName?: Value<string>
}