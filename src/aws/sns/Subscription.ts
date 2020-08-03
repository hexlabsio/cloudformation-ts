import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function subscription(subscriptionProps: Subscription): Subscription { return ({ ...subscriptionProps, _logicalType: '' }) }
  
export interface Subscription extends KloudResource {
  deliveryPolicy?: Value<any>
  endpoint?: Value<string>
  filterPolicy?: Value<any>
  protocol: Value<string>
  rawMessageDelivery?: Value<boolean>
  redrivePolicy?: Value<any>
  region?: Value<string>
  topicArn: Value<string>
}