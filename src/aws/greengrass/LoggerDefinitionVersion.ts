import { Value } from '../../kloudformation/Value';
import { LoggerProps } from './loggerDefinitionVersion/LoggerProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function loggerDefinitionVersion(loggerDefinitionVersionProps: LoggerDefinitionVersion): LoggerDefinitionVersion { return ({ ...loggerDefinitionVersionProps, _logicalType: '' }) }
  
export interface LoggerDefinitionVersion extends KloudResource {
  loggerDefinitionId: Value<string>
  loggers: LoggerProps[]
}