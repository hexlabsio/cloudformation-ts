import { Value } from '../../kloudformation/Value';
import { ConnectorDefinitionVersionProps } from './connectordefinition/ConnectorDefinitionVersionProps';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type ConnectorDefinitionAttributes = { LatestVersionArn: Attribute<string>; Id: Attribute<string>; Arn: Attribute<string>; Name: Attribute<string> }
export function connectorDefinition(connectorDefinitionProps: ConnectorDefinition): ConnectorDefinition & { attributes: ConnectorDefinitionAttributes } { return ({ ...connectorDefinitionProps, _logicalType: 'AWS::Greengrass::ConnectorDefinition', attributes: { LatestVersionArn: 'LatestVersionArn', Id: 'Id', Arn: 'Arn', Name: 'Name' } }) }

export interface ConnectorDefinition extends KloudResource {
    name: Value<string>;
    initialVersion?: ConnectorDefinitionVersionProps;
    tags?: Value<any>;
}