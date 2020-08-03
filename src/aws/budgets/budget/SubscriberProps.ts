import { Value } from '../../../kloudformation/Value';

export interface SubscriberProps {
  subscriptionType: Value<string>
  address: Value<string>
}