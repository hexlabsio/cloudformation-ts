import { CloudWatchLogsLogGroupProps } from './CloudWatchLogsLogGroupProps';

export function logDestinationProps(logDestinationPropsProps: LogDestinationProps): LogDestinationProps { return (logDestinationPropsProps) as unknown as LogDestinationProps }

export interface LogDestinationProps {
    cloudWatchLogsLogGroup?: CloudWatchLogsLogGroupProps;
}