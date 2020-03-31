import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type ConfigurationSetAttributes = {  }
export function configurationSet(configurationSetProps: ConfigurationSet): ConfigurationSet & { attributes: ConfigurationSetAttributes } { return ({ ...configurationSetProps, _logicalType: 'AWS::SES::ConfigurationSet', attributes: {  } }) }

export interface ConfigurationSet extends KloudResource {
    name?: Value<string>;
}