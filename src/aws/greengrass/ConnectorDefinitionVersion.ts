import { ConnectorProps } from './connectordefinitionversion/ConnectorProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type ConnectorDefinitionVersionAttributes = {  }
export function connectorDefinitionVersion(connectorDefinitionVersionProps: ConnectorDefinitionVersion): ConnectorDefinitionVersion & { attributes: ConnectorDefinitionVersionAttributes } { return ({ ...connectorDefinitionVersionProps, _logicalType: 'AWS::Greengrass::ConnectorDefinitionVersion', attributes: {  } }) }

export interface ConnectorDefinitionVersion extends KloudResource {
    connectors: ConnectorProps[];
    connectorDefinitionId: Value<string>;
}