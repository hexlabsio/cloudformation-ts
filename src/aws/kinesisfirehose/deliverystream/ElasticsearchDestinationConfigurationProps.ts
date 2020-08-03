import { ElasticsearchBufferingHintsProps } from './ElasticsearchBufferingHintsProps';
import { CloudWatchLoggingOptionsProps } from './CloudWatchLoggingOptionsProps';
import { Value } from '../../../kloudformation/Value';
import { ProcessingConfigurationProps } from './ProcessingConfigurationProps';
import { ElasticsearchRetryOptionsProps } from './ElasticsearchRetryOptionsProps';
import { S3DestinationConfigurationProps } from './S3DestinationConfigurationProps';
import { VpcConfigurationProps } from './VpcConfigurationProps';

export interface ElasticsearchDestinationConfigurationProps {
  bufferingHints?: ElasticsearchBufferingHintsProps
  cloudWatchLoggingOptions?: CloudWatchLoggingOptionsProps
  domainARN?: Value<string>
  indexName: Value<string>
  indexRotationPeriod?: Value<string>
  processingConfiguration?: ProcessingConfigurationProps
  retryOptions?: ElasticsearchRetryOptionsProps
  roleARN: Value<string>
  s3BackupMode?: Value<string>
  s3Configuration: S3DestinationConfigurationProps
  clusterEndpoint?: Value<string>
  typeName?: Value<string>
  vpcConfiguration?: VpcConfigurationProps
}