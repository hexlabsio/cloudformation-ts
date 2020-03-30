import { Value } from '../../kloudformation/Value';
import { RoutingStrategyProps } from './alias/RoutingStrategyProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function alias(aliasProps: Alias & { logicalName?: string }): Alias { return ({ ...aliasProps, _logicalType: 'AWS::GameLift::Alias' }) as unknown as Alias }

export interface Alias extends KloudResource {
    name: Value<string>;
    routingStrategy: RoutingStrategyProps;
    description?: Value<string>;
}