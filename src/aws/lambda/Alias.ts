import { Value } from '../../kloudformation/Value';
import { ProvisionedConcurrencyConfigurationProps } from './alias/ProvisionedConcurrencyConfigurationProps';
import { AliasRoutingConfigurationProps } from './alias/AliasRoutingConfigurationProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type AliasAttributes = {  }
export function alias(aliasProps: Alias): Alias & { attributes: AliasAttributes } { return ({ ...aliasProps, _logicalType: 'AWS::Lambda::Alias', attributes: {  } }) }

export interface Alias extends KloudResource {
    functionName: Value<string>;
    functionVersion: Value<string>;
    name: Value<string>;
    description?: Value<string>;
    provisionedConcurrencyConfig?: ProvisionedConcurrencyConfigurationProps;
    routingConfig?: AliasRoutingConfigurationProps;
}