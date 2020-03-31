import { Value } from '../../../kloudformation/Value';
import { S3DestinationConfigurationProps } from './S3DestinationConfigurationProps';
import { CloudWatchLoggingOptionsProps } from './CloudWatchLoggingOptionsProps';
import { ProcessingConfigurationProps } from './ProcessingConfigurationProps';
import { SplunkRetryOptionsProps } from './SplunkRetryOptionsProps';

export function splunkDestinationConfigurationProps(splunkDestinationConfigurationPropsProps: SplunkDestinationConfigurationProps): SplunkDestinationConfigurationProps { return (splunkDestinationConfigurationPropsProps) }

export interface SplunkDestinationConfigurationProps {
    hECEndpoint: Value<string>;
    hECEndpointType: Value<string>;
    hECToken: Value<string>;
    s3Configuration: S3DestinationConfigurationProps;
    cloudWatchLoggingOptions?: CloudWatchLoggingOptionsProps;
    hECAcknowledgmentTimeoutInSeconds?: Value<number>;
    processingConfiguration?: ProcessingConfigurationProps;
    retryOptions?: SplunkRetryOptionsProps;
    s3BackupMode?: Value<string>;
}