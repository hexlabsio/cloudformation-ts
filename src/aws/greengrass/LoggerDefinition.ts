import { Value } from '../../kloudformation/Value';
import { LoggerDefinitionVersionProps } from './loggerdefinition/LoggerDefinitionVersionProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function loggerDefinition(loggerDefinitionProps: LoggerDefinition & { logicalName?: string }): LoggerDefinition { return ({ ...loggerDefinitionProps, _logicalType: 'AWS::Greengrass::LoggerDefinition' }) as unknown as LoggerDefinition }

export interface LoggerDefinition extends KloudResource {
    name: Value<string>;
    initialVersion?: LoggerDefinitionVersionProps;
    tags?: Value<any>;
}