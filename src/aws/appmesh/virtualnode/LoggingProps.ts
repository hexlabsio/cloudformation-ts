import { AccessLogProps } from './AccessLogProps';

export function loggingProps(loggingPropsProps: LoggingProps): LoggingProps { return (loggingPropsProps) }

export interface LoggingProps {
    accessLog?: AccessLogProps;
}