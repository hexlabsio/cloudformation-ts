import { Value } from '../../../kloudformation/Value';

export interface CustomRuleProps {
  condition?: Value<string>
  status?: Value<string>
  target: Value<string>
  source: Value<string>
}