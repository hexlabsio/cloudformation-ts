import { RedirectRuleProps } from './RedirectRuleProps';
import { RoutingRuleConditionProps } from './RoutingRuleConditionProps';

export function routingRuleProps(routingRulePropsProps: RoutingRuleProps): RoutingRuleProps { return (routingRulePropsProps) as unknown as RoutingRuleProps }

export interface RoutingRuleProps {
    redirectRule: RedirectRuleProps;
    routingRuleCondition?: RoutingRuleConditionProps;
}