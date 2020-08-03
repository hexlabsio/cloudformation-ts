import { Value } from '../../kloudformation/Value';
import { RoutingStrategyProps } from './alias/RoutingStrategyProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function alias(aliasProps: Alias): Alias { return ({ ...aliasProps, _logicalType: '' }) }
  
export interface Alias extends KloudResource {
  description?: Value<string>
  name: Value<string>
  routingStrategy: RoutingStrategyProps
}