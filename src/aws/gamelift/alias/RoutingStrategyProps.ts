import { Value } from '../../../kloudformation/Value';

export function routingStrategyProps(routingStrategyPropsProps: RoutingStrategyProps): RoutingStrategyProps { return (routingStrategyPropsProps) }

export interface RoutingStrategyProps {
    type: Value<string>;
    fleetId?: Value<string>;
    message?: Value<string>;
}