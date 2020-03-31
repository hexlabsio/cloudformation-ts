import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type EventSubscriptionAttributes = {  }
export function eventSubscription(eventSubscriptionProps: EventSubscription): EventSubscription & { attributes: EventSubscriptionAttributes } { return ({ ...eventSubscriptionProps, _logicalType: 'AWS::RDS::EventSubscription', attributes: {  } }) }

export interface EventSubscription extends KloudResource {
    snsTopicArn: Value<string>;
    enabled?: Value<boolean>;
    eventCategories?: Value<Value<string>[]>;
    sourceIds?: Value<Value<string>[]>;
    sourceType?: Value<string>;
}