import { S3Props } from './S3Props';
import { FirehoseProps } from './FirehoseProps';
import { CloudWatchLogsProps } from './CloudWatchLogsProps';

export function brokerLogsProps(brokerLogsPropsProps: BrokerLogsProps): BrokerLogsProps { return (brokerLogsPropsProps) }

export interface BrokerLogsProps {
    s3?: S3Props;
    firehose?: FirehoseProps;
    cloudWatchLogs?: CloudWatchLogsProps;
}