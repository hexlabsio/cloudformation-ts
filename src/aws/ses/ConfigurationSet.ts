import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function configurationSet(configurationSetProps: ConfigurationSet & { logicalName?: string }): ConfigurationSet { return ({ ...configurationSetProps, _logicalType: 'AWS::SES::ConfigurationSet' }) as unknown as ConfigurationSet }

export interface ConfigurationSet extends KloudResource {
    name?: Value<string>;
}