import { Value } from '../../../kloudformation/Value';

export function routingRuleConditionProps(routingRuleConditionPropsProps: RoutingRuleConditionProps): RoutingRuleConditionProps { return (routingRuleConditionPropsProps) }

export interface RoutingRuleConditionProps {
    httpErrorCodeReturnedEquals?: Value<string>;
    keyPrefixEquals?: Value<string>;
}