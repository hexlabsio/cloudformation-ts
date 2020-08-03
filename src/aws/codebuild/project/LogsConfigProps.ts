import { CloudWatchLogsConfigProps } from './CloudWatchLogsConfigProps';
import { S3LogsConfigProps } from './S3LogsConfigProps';

export interface LogsConfigProps {
  cloudWatchLogs?: CloudWatchLogsConfigProps
  s3Logs?: S3LogsConfigProps
}