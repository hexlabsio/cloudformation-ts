import { Value } from '../../kloudformation/Value';
import { RoutingStrategyProps } from './alias/RoutingStrategyProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type AliasAttributes = {  }
export function alias(aliasProps: Alias): Alias & { attributes: AliasAttributes } { return ({ ...aliasProps, _logicalType: 'AWS::GameLift::Alias', attributes: {  } }) }

export interface Alias extends KloudResource {
    name: Value<string>;
    routingStrategy: RoutingStrategyProps;
    description?: Value<string>;
}