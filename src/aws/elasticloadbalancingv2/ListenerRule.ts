import { ActionProps } from './listenerrule/ActionProps';
import { RuleConditionProps } from './listenerrule/RuleConditionProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function listenerRule(listenerRuleProps: ListenerRule & { logicalName?: string }): ListenerRule { return ({ ...listenerRuleProps, _logicalType: 'AWS::ElasticLoadBalancingV2::ListenerRule' }) as unknown as ListenerRule }

export interface ListenerRule extends KloudResource {
    actions: ActionProps[];
    conditions: RuleConditionProps[];
    listenerArn: Value<string>;
    priority: Value<number>;
}