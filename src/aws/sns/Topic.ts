import { Value } from '../../kloudformation/Value';
import { SubscriptionProps } from './topic/SubscriptionProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function topic(topicProps: Topic & { logicalName?: string }): Topic { return ({ ...topicProps, _logicalType: 'AWS::SNS::Topic' }) as unknown as Topic }

export interface Topic extends KloudResource {
    displayName?: Value<string>;
    kmsMasterKeyId?: Value<string>;
    subscription?: SubscriptionProps[];
    tags?: Tag[];
    topicName?: Value<string>;
}