import { Value } from '../../../kloudformation/Value';

export interface SubscriptionProps {
  target: Value<string>
  id: Value<string>
  source: Value<string>
  subject: Value<string>
}