import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function eventSubscription(eventSubscriptionProps: EventSubscription & { logicalName?: string }): EventSubscription { return ({ ...eventSubscriptionProps, _logicalType: 'AWS::DMS::EventSubscription' }) as unknown as EventSubscription }

export interface EventSubscription extends KloudResource {
    snsTopicArn: Value<string>;
    sourceType?: Value<string>;
    eventCategories?: Value<Value<string>[]>;
    enabled?: Value<boolean>;
    subscriptionName?: Value<string>;
    sourceIds?: Value<Value<string>[]>;
    tags?: Tag[];
}