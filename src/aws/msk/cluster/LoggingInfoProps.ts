import { BrokerLogsProps } from './BrokerLogsProps';

export function loggingInfoProps(loggingInfoPropsProps: LoggingInfoProps): LoggingInfoProps { return (loggingInfoPropsProps) as unknown as LoggingInfoProps }

export interface LoggingInfoProps {
    brokerLogs: BrokerLogsProps;
}