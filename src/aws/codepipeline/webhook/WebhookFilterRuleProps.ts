import { Value } from '../../../kloudformation/Value';

export interface WebhookFilterRuleProps {
  jsonPath: Value<string>
  matchEquals?: Value<string>
}