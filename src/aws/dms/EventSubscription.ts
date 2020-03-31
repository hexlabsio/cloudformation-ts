import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export type EventSubscriptionAttributes = {  }
export function eventSubscription(eventSubscriptionProps: EventSubscription): EventSubscription & { attributes: EventSubscriptionAttributes } { return ({ ...eventSubscriptionProps, _logicalType: 'AWS::DMS::EventSubscription', attributes: {  } }) }

export interface EventSubscription extends KloudResource {
    snsTopicArn: Value<string>;
    sourceType?: Value<string>;
    eventCategories?: Value<Value<string>[]>;
    enabled?: Value<boolean>;
    subscriptionName?: Value<string>;
    sourceIds?: Value<Value<string>[]>;
    tags?: Tag[];
}