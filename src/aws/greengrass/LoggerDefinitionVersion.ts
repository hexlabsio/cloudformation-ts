import { Value } from '../../kloudformation/Value';
import { LoggerProps } from './loggerdefinitionversion/LoggerProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function loggerDefinitionVersion(loggerDefinitionVersionProps: LoggerDefinitionVersion & { logicalName?: string }): LoggerDefinitionVersion { return ({ ...loggerDefinitionVersionProps, _logicalType: 'AWS::Greengrass::LoggerDefinitionVersion' }) as unknown as LoggerDefinitionVersion }

export interface LoggerDefinitionVersion extends KloudResource {
    loggerDefinitionId: Value<string>;
    loggers: LoggerProps[];
}