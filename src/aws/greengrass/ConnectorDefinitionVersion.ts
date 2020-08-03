import { ConnectorProps } from './connectorDefinitionVersion/ConnectorProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function connectorDefinitionVersion(connectorDefinitionVersionProps: ConnectorDefinitionVersion): ConnectorDefinitionVersion { return ({ ...connectorDefinitionVersionProps, _logicalType: '' }) }
  
export interface ConnectorDefinitionVersion extends KloudResource {
  connectors: ConnectorProps[]
  connectorDefinitionId: Value<string>
}