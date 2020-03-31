import { ActionProps } from './listenerrule/ActionProps';
import { RuleConditionProps } from './listenerrule/RuleConditionProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type ListenerRuleAttributes = {  }
export function listenerRule(listenerRuleProps: ListenerRule): ListenerRule & { attributes: ListenerRuleAttributes } { return ({ ...listenerRuleProps, _logicalType: 'AWS::ElasticLoadBalancingV2::ListenerRule', attributes: {  } }) }

export interface ListenerRule extends KloudResource {
    actions: ActionProps[];
    conditions: RuleConditionProps[];
    listenerArn: Value<string>;
    priority: Value<number>;
}