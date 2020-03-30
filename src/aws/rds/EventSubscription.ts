import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function eventSubscription(eventSubscriptionProps: EventSubscription & { logicalName?: string }): EventSubscription { return ({ ...eventSubscriptionProps, _logicalType: 'AWS::RDS::EventSubscription' }) as unknown as EventSubscription }

export interface EventSubscription extends KloudResource {
    snsTopicArn: Value<string>;
    enabled?: Value<boolean>;
    eventCategories?: Value<Value<string>[]>;
    sourceIds?: Value<Value<string>[]>;
    sourceType?: Value<string>;
}