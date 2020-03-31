import { Value } from '../../kloudformation/Value';
import { LoggerDefinitionVersionProps } from './loggerdefinition/LoggerDefinitionVersionProps';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type LoggerDefinitionAttributes = { LatestVersionArn: Attribute<string>; Id: Attribute<string>; Arn: Attribute<string>; Name: Attribute<string> }
export function loggerDefinition(loggerDefinitionProps: LoggerDefinition): LoggerDefinition & { attributes: LoggerDefinitionAttributes } { return ({ ...loggerDefinitionProps, _logicalType: 'AWS::Greengrass::LoggerDefinition', attributes: { LatestVersionArn: 'LatestVersionArn', Id: 'Id', Arn: 'Arn', Name: 'Name' } }) }

export interface LoggerDefinition extends KloudResource {
    name: Value<string>;
    initialVersion?: LoggerDefinitionVersionProps;
    tags?: Value<any>;
}