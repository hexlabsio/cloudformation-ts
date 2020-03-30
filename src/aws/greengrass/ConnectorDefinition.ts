import { Value } from '../../kloudformation/Value';
import { ConnectorDefinitionVersionProps } from './connectordefinition/ConnectorDefinitionVersionProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function connectorDefinition(connectorDefinitionProps: ConnectorDefinition & { logicalName?: string }): ConnectorDefinition { return ({ ...connectorDefinitionProps, _logicalType: 'AWS::Greengrass::ConnectorDefinition' }) as unknown as ConnectorDefinition }

export interface ConnectorDefinition extends KloudResource {
    name: Value<string>;
    initialVersion?: ConnectorDefinitionVersionProps;
    tags?: Value<any>;
}