import { Value } from '../../kloudformation/Value';
import { ConfigurationIdProps } from './configurationassociation/ConfigurationIdProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type ConfigurationAssociationAttributes = {  }
export function configurationAssociation(configurationAssociationProps: ConfigurationAssociation): ConfigurationAssociation & { attributes: ConfigurationAssociationAttributes } { return ({ ...configurationAssociationProps, _logicalType: 'AWS::AmazonMQ::ConfigurationAssociation', attributes: {  } }) }

export interface ConfigurationAssociation extends KloudResource {
    broker: Value<string>;
    configuration: ConfigurationIdProps;
}