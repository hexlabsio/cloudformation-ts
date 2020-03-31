import { Value } from '../../../kloudformation/Value';
import { BufferingHintsProps } from './BufferingHintsProps';
import { CloudWatchLoggingOptionsProps } from './CloudWatchLoggingOptionsProps';
import { EncryptionConfigurationProps } from './EncryptionConfigurationProps';

export function s3DestinationConfigurationProps(s3DestinationConfigurationPropsProps: S3DestinationConfigurationProps): S3DestinationConfigurationProps { return (s3DestinationConfigurationPropsProps) }

export interface S3DestinationConfigurationProps {
    bucketARN: Value<string>;
    bufferingHints: BufferingHintsProps;
    compressionFormat: Value<string>;
    roleARN: Value<string>;
    cloudWatchLoggingOptions?: CloudWatchLoggingOptionsProps;
    encryptionConfiguration?: EncryptionConfigurationProps;
    errorOutputPrefix?: Value<string>;
    prefix?: Value<string>;
}