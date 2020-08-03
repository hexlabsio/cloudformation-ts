import { ConnectorDefinitionVersionProps } from './connectorDefinition/ConnectorDefinitionVersionProps';
import { Value } from '../../kloudformation/Value';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type ConnectorDefinitionAttributes = { LatestVersionArn: Attribute<string>;Id: Attribute<string>;Arn: Attribute<string>;Name: Attribute<string> }
export function connectorDefinition(connectorDefinitionProps: ConnectorDefinition): ConnectorDefinition & {attributes: ConnectorDefinitionAttributes} { return ({ ...connectorDefinitionProps, _logicalType: 'AWS::Greengrass::ConnectorDefinition', attributes: { LatestVersionArn: 'LatestVersionArn',Id: 'Id',Arn: 'Arn',Name: 'Name' } }) }
   
export interface ConnectorDefinition extends KloudResource {
  initialVersion?: ConnectorDefinitionVersionProps
  tags?: Value<any>
  name: Value<string>
}