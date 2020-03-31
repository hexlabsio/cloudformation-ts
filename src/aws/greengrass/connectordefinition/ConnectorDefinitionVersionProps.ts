import { ConnectorProps } from './ConnectorProps';

export function connectorDefinitionVersionProps(connectorDefinitionVersionPropsProps: ConnectorDefinitionVersionProps): ConnectorDefinitionVersionProps { return (connectorDefinitionVersionPropsProps) }

export interface ConnectorDefinitionVersionProps {
    connectors: ConnectorProps[];
}