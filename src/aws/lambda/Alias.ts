import { Value } from '../../kloudformation/Value';
import { ProvisionedConcurrencyConfigurationProps } from './alias/ProvisionedConcurrencyConfigurationProps';
import { AliasRoutingConfigurationProps } from './alias/AliasRoutingConfigurationProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function alias(aliasProps: Alias & { logicalName?: string }): Alias { return ({ ...aliasProps, _logicalType: 'AWS::Lambda::Alias' }) as unknown as Alias }

export interface Alias extends KloudResource {
    functionName: Value<string>;
    functionVersion: Value<string>;
    name: Value<string>;
    description?: Value<string>;
    provisionedConcurrencyConfig?: ProvisionedConcurrencyConfigurationProps;
    routingConfig?: AliasRoutingConfigurationProps;
}