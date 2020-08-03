import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
export function eventSubscription(eventSubscriptionProps: EventSubscription): EventSubscription { return ({ ...eventSubscriptionProps, _logicalType: '' }) }
  
export interface EventSubscription extends KloudResource {
  sourceType?: Value<string>
  eventCategories?: Value<Value<string>[]>
  enabled?: Value<boolean>
  subscriptionName?: Value<string>
  snsTopicArn: Value<string>
  sourceIds?: Value<Value<string>[]>
  tags?: Tag[]
}