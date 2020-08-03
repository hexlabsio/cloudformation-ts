import { WafActionProps } from './WafActionProps';
import { Value } from '../../../kloudformation/Value';

export interface ActivatedRuleProps {
  action?: WafActionProps
  priority: Value<number>
  ruleId: Value<string>
}