import { Value } from '../../kloudformation/Value';
import { ProvisionedConcurrencyConfigurationProps } from './alias/ProvisionedConcurrencyConfigurationProps';
import { AliasRoutingConfigurationProps } from './alias/AliasRoutingConfigurationProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function alias(aliasProps: Alias): Alias { return ({ ...aliasProps, _logicalType: '' }) }
  
export interface Alias extends KloudResource {
  description?: Value<string>
  functionName: Value<string>
  functionVersion: Value<string>
  name: Value<string>
  provisionedConcurrencyConfig?: ProvisionedConcurrencyConfigurationProps
  routingConfig?: AliasRoutingConfigurationProps
}