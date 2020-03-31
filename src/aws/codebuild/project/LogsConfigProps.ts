import { CloudWatchLogsConfigProps } from './CloudWatchLogsConfigProps';
import { S3LogsConfigProps } from './S3LogsConfigProps';

export function logsConfigProps(logsConfigPropsProps: LogsConfigProps): LogsConfigProps { return (logsConfigPropsProps) }

export interface LogsConfigProps {
    cloudWatchLogs?: CloudWatchLogsConfigProps;
    s3Logs?: S3LogsConfigProps;
}