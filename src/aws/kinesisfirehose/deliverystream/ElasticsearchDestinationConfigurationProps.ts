import { ElasticsearchBufferingHintsProps } from './ElasticsearchBufferingHintsProps';
import { Value } from '../../../kloudformation/Value';
import { ElasticsearchRetryOptionsProps } from './ElasticsearchRetryOptionsProps';
import { S3DestinationConfigurationProps } from './S3DestinationConfigurationProps';
import { CloudWatchLoggingOptionsProps } from './CloudWatchLoggingOptionsProps';
import { ProcessingConfigurationProps } from './ProcessingConfigurationProps';

export function elasticsearchDestinationConfigurationProps(elasticsearchDestinationConfigurationPropsProps: ElasticsearchDestinationConfigurationProps): ElasticsearchDestinationConfigurationProps { return (elasticsearchDestinationConfigurationPropsProps) }

export interface ElasticsearchDestinationConfigurationProps {
    bufferingHints: ElasticsearchBufferingHintsProps;
    domainARN: Value<string>;
    indexName: Value<string>;
    indexRotationPeriod: Value<string>;
    retryOptions: ElasticsearchRetryOptionsProps;
    roleARN: Value<string>;
    s3BackupMode: Value<string>;
    s3Configuration: S3DestinationConfigurationProps;
    typeName: Value<string>;
    cloudWatchLoggingOptions?: CloudWatchLoggingOptionsProps;
    processingConfiguration?: ProcessingConfigurationProps;
}