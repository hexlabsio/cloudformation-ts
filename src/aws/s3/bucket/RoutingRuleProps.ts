import { RedirectRuleProps } from './RedirectRuleProps';
import { RoutingRuleConditionProps } from './RoutingRuleConditionProps';

export interface RoutingRuleProps {
  redirectRule: RedirectRuleProps
  routingRuleCondition?: RoutingRuleConditionProps
}