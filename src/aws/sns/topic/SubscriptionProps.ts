import { Value } from '../../../kloudformation/Value';

export interface SubscriptionProps {
  endpoint: Value<string>
  protocol: Value<string>
}