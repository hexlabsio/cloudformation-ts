import { Value } from '../../kloudformation/Value';
import { LoggerProps } from './loggerdefinitionversion/LoggerProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type LoggerDefinitionVersionAttributes = {  }
export function loggerDefinitionVersion(loggerDefinitionVersionProps: LoggerDefinitionVersion): LoggerDefinitionVersion & { attributes: LoggerDefinitionVersionAttributes } { return ({ ...loggerDefinitionVersionProps, _logicalType: 'AWS::Greengrass::LoggerDefinitionVersion', attributes: {  } }) }

export interface LoggerDefinitionVersion extends KloudResource {
    loggerDefinitionId: Value<string>;
    loggers: LoggerProps[];
}