import { Value } from '../../../kloudformation/Value';

export interface RoutingRuleConditionProps {
  httpErrorCodeReturnedEquals?: Value<string>
  keyPrefixEquals?: Value<string>
}