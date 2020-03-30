import { ConnectorProps } from './ConnectorProps';

export function connectorDefinitionVersionProps(connectorDefinitionVersionPropsProps: ConnectorDefinitionVersionProps): ConnectorDefinitionVersionProps { return (connectorDefinitionVersionPropsProps) as unknown as ConnectorDefinitionVersionProps }

export interface ConnectorDefinitionVersionProps {
    connectors: ConnectorProps[];
}