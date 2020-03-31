import { CloudWatchLogsLogGroupProps } from './CloudWatchLogsLogGroupProps';

export function logDestinationProps(logDestinationPropsProps: LogDestinationProps): LogDestinationProps { return (logDestinationPropsProps) }

export interface LogDestinationProps {
    cloudWatchLogsLogGroup?: CloudWatchLogsLogGroupProps;
}