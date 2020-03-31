import { BrokerLogsProps } from './BrokerLogsProps';

export function loggingInfoProps(loggingInfoPropsProps: LoggingInfoProps): LoggingInfoProps { return (loggingInfoPropsProps) }

export interface LoggingInfoProps {
    brokerLogs: BrokerLogsProps;
}