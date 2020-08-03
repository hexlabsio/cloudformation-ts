import { Value } from '../../kloudformation/Value';
import { ConfigurationIdProps } from './configurationAssociation/ConfigurationIdProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function configurationAssociation(configurationAssociationProps: ConfigurationAssociation): ConfigurationAssociation { return ({ ...configurationAssociationProps, _logicalType: '' }) }
  
export interface ConfigurationAssociation extends KloudResource {
  broker: Value<string>
  configuration: ConfigurationIdProps
}