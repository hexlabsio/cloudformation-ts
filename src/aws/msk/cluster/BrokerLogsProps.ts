import { S3Props } from './S3Props';
import { FirehoseProps } from './FirehoseProps';
import { CloudWatchLogsProps } from './CloudWatchLogsProps';

export interface BrokerLogsProps {
  s3?: S3Props
  firehose?: FirehoseProps
  cloudWatchLogs?: CloudWatchLogsProps
}