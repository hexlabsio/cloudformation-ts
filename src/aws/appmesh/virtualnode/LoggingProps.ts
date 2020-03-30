import { AccessLogProps } from './AccessLogProps';

export function loggingProps(loggingPropsProps: LoggingProps): LoggingProps { return (loggingPropsProps) as unknown as LoggingProps }

export interface LoggingProps {
    accessLog?: AccessLogProps;
}