import { Value } from '../../../kloudformation/Value';
import { HttpEndpointConfigurationProps } from './HttpEndpointConfigurationProps';
import { HttpEndpointRequestConfigurationProps } from './HttpEndpointRequestConfigurationProps';
import { BufferingHintsProps } from './BufferingHintsProps';
import { CloudWatchLoggingOptionsProps } from './CloudWatchLoggingOptionsProps';
import { ProcessingConfigurationProps } from './ProcessingConfigurationProps';
import { RetryOptionsProps } from './RetryOptionsProps';
import { S3DestinationConfigurationProps } from './S3DestinationConfigurationProps';

export interface HttpEndpointDestinationConfigurationProps {
  roleARN?: Value<string>
  endpointConfiguration: HttpEndpointConfigurationProps
  requestConfiguration?: HttpEndpointRequestConfigurationProps
  bufferingHints?: BufferingHintsProps
  cloudWatchLoggingOptions?: CloudWatchLoggingOptionsProps
  processingConfiguration?: ProcessingConfigurationProps
  retryOptions?: RetryOptionsProps
  s3BackupMode?: Value<string>
  s3Configuration: S3DestinationConfigurationProps
}