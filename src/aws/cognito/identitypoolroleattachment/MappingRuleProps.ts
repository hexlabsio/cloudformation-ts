import { Value } from '../../../kloudformation/Value';

export interface MappingRuleProps {
  matchType: Value<string>
  value: Value<string>
  claim: Value<string>
  roleARN: Value<string>
}