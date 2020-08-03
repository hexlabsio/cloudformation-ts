import { Value } from '../../../kloudformation/Value';

export interface RetainRuleProps {
  intervalUnit?: Value<string>
  count?: Value<number>
  interval?: Value<number>
}