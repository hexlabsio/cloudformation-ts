import { Value } from '../../../kloudformation/Value';

export interface CreateRuleProps {
  intervalUnit?: Value<string>
  times?: Value<Value<string>[]>
  cronExpression?: Value<string>
  interval?: Value<number>
}