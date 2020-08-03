import { ActionProps } from './ActionProps';
import { Value } from '../../../kloudformation/Value';

export interface RuleProps {
  action: ActionProps
  priority: Value<number>
  ruleId: Value<string>
}