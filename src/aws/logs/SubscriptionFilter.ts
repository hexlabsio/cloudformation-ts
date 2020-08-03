import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function subscriptionFilter(subscriptionFilterProps: SubscriptionFilter): SubscriptionFilter { return ({ ...subscriptionFilterProps, _logicalType: '' }) }
  
export interface SubscriptionFilter extends KloudResource {
  destinationArn: Value<string>
  filterPattern: Value<string>
  logGroupName: Value<string>
  roleArn?: Value<string>
}