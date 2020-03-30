import { Value } from '../../../kloudformation/Value';

export function routingRuleConditionProps(routingRuleConditionPropsProps: RoutingRuleConditionProps): RoutingRuleConditionProps { return (routingRuleConditionPropsProps) as unknown as RoutingRuleConditionProps }

export interface RoutingRuleConditionProps {
    httpErrorCodeReturnedEquals?: Value<string>;
    keyPrefixEquals?: Value<string>;
}