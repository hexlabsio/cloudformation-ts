import { LoggerProps } from '../loggerdefinitionversion/LoggerProps';

export function loggerDefinitionVersionProps(loggerDefinitionVersionPropsProps: LoggerDefinitionVersionProps): LoggerDefinitionVersionProps { return (loggerDefinitionVersionPropsProps) as unknown as LoggerDefinitionVersionProps }

export interface LoggerDefinitionVersionProps {
    loggers: LoggerProps[];
}