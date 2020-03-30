import { Value } from '../../kloudformation/Value';
import { ConfigurationIdProps } from './configurationassociation/ConfigurationIdProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function configurationAssociation(configurationAssociationProps: ConfigurationAssociation & { logicalName?: string }): ConfigurationAssociation { return ({ ...configurationAssociationProps, _logicalType: 'AWS::AmazonMQ::ConfigurationAssociation' }) as unknown as ConfigurationAssociation }

export interface ConfigurationAssociation extends KloudResource {
    broker: Value<string>;
    configuration: ConfigurationIdProps;
}