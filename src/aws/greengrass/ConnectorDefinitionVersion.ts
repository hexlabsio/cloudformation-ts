import { ConnectorProps } from './connectordefinitionversion/ConnectorProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function connectorDefinitionVersion(connectorDefinitionVersionProps: ConnectorDefinitionVersion & { logicalName?: string }): ConnectorDefinitionVersion { return ({ ...connectorDefinitionVersionProps, _logicalType: 'AWS::Greengrass::ConnectorDefinitionVersion' }) as unknown as ConnectorDefinitionVersion }

export interface ConnectorDefinitionVersion extends KloudResource {
    connectors: ConnectorProps[];
    connectorDefinitionId: Value<string>;
}