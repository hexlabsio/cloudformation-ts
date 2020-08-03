import { CloudWatchLoggingOptionsProps } from './CloudWatchLoggingOptionsProps';
import { Value } from '../../../kloudformation/Value';
import { ProcessingConfigurationProps } from './ProcessingConfigurationProps';
import { SplunkRetryOptionsProps } from './SplunkRetryOptionsProps';
import { S3DestinationConfigurationProps } from './S3DestinationConfigurationProps';

export interface SplunkDestinationConfigurationProps {
  cloudWatchLoggingOptions?: CloudWatchLoggingOptionsProps
  hECAcknowledgmentTimeoutInSeconds?: Value<number>
  hECEndpoint: Value<string>
  hECEndpointType: Value<string>
  hECToken: Value<string>
  processingConfiguration?: ProcessingConfigurationProps
  retryOptions?: SplunkRetryOptionsProps
  s3BackupMode?: Value<string>
  s3Configuration: S3DestinationConfigurationProps
}