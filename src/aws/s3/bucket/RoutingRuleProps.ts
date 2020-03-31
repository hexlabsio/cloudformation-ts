import { RedirectRuleProps } from './RedirectRuleProps';
import { RoutingRuleConditionProps } from './RoutingRuleConditionProps';

export function routingRuleProps(routingRulePropsProps: RoutingRuleProps): RoutingRuleProps { return (routingRulePropsProps) }

export interface RoutingRuleProps {
    redirectRule: RedirectRuleProps;
    routingRuleCondition?: RoutingRuleConditionProps;
}