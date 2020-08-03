import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function eventSubscription(eventSubscriptionProps: EventSubscription): EventSubscription { return ({ ...eventSubscriptionProps, _logicalType: '' }) }
  
export interface EventSubscription extends KloudResource {
  enabled?: Value<boolean>
  eventCategories?: Value<Value<string>[]>
  snsTopicArn: Value<string>
  sourceIds?: Value<Value<string>[]>
  sourceType?: Value<string>
}