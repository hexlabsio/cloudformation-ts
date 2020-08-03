import { Value } from '../../../kloudformation/Value';

export interface WebhookFilterProps {
  pattern: Value<string>
  type: Value<string>
  excludeMatchedPattern?: Value<boolean>
}