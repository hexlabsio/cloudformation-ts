import { ActionProps } from './listenerRule/ActionProps';
import { RuleConditionProps } from './listenerRule/RuleConditionProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function listenerRule(listenerRuleProps: ListenerRule): ListenerRule { return ({ ...listenerRuleProps, _logicalType: '' }) }
  
export interface ListenerRule extends KloudResource {
  actions: ActionProps[]
  conditions: RuleConditionProps[]
  listenerArn: Value<string>
  priority: Value<number>
}