import { Value } from '../../kloudformation/Value';
import { SubscriptionProps } from './topic/SubscriptionProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type TopicAttributes = { TopicName: Attribute<string> }
export function topic(topicProps: Topic): Topic & { attributes: TopicAttributes } { return ({ ...topicProps, _logicalType: 'AWS::SNS::Topic', attributes: { TopicName: 'TopicName' } }) }

export interface Topic extends KloudResource {
    displayName?: Value<string>;
    kmsMasterKeyId?: Value<string>;
    subscription?: SubscriptionProps[];
    tags?: Tag[];
    topicName?: Value<string>;
}