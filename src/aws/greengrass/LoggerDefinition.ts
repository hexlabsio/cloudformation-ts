import { LoggerDefinitionVersionProps } from './loggerDefinition/LoggerDefinitionVersionProps';
import { Value } from '../../kloudformation/Value';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type LoggerDefinitionAttributes = { LatestVersionArn: Attribute<string>;Id: Attribute<string>;Arn: Attribute<string>;Name: Attribute<string> }
export function loggerDefinition(loggerDefinitionProps: LoggerDefinition): LoggerDefinition & {attributes: LoggerDefinitionAttributes} { return ({ ...loggerDefinitionProps, _logicalType: 'AWS::Greengrass::LoggerDefinition', attributes: { LatestVersionArn: 'LatestVersionArn',Id: 'Id',Arn: 'Arn',Name: 'Name' } }) }
   
export interface LoggerDefinition extends KloudResource {
  initialVersion?: LoggerDefinitionVersionProps
  tags?: Value<any>
  name: Value<string>
}