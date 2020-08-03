import { Value } from '../../../kloudformation/Value';

export interface RoutingStrategyProps {
  fleetId?: Value<string>
  message?: Value<string>
  type: Value<string>
}