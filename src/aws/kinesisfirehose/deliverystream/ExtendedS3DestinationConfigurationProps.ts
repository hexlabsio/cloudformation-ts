import { Value } from '../../../kloudformation/Value';
import { BufferingHintsProps } from './BufferingHintsProps';
import { CloudWatchLoggingOptionsProps } from './CloudWatchLoggingOptionsProps';
import { DataFormatConversionConfigurationProps } from './DataFormatConversionConfigurationProps';
import { EncryptionConfigurationProps } from './EncryptionConfigurationProps';
import { ProcessingConfigurationProps } from './ProcessingConfigurationProps';
import { S3DestinationConfigurationProps } from './S3DestinationConfigurationProps';

export function extendedS3DestinationConfigurationProps(extendedS3DestinationConfigurationPropsProps: ExtendedS3DestinationConfigurationProps): ExtendedS3DestinationConfigurationProps { return (extendedS3DestinationConfigurationPropsProps) }

export interface ExtendedS3DestinationConfigurationProps {
    bucketARN: Value<string>;
    bufferingHints: BufferingHintsProps;
    compressionFormat: Value<string>;
    roleARN: Value<string>;
    cloudWatchLoggingOptions?: CloudWatchLoggingOptionsProps;
    dataFormatConversionConfiguration?: DataFormatConversionConfigurationProps;
    encryptionConfiguration?: EncryptionConfigurationProps;
    errorOutputPrefix?: Value<string>;
    prefix?: Value<string>;
    processingConfiguration?: ProcessingConfigurationProps;
    s3BackupConfiguration?: S3DestinationConfigurationProps;
    s3BackupMode?: Value<string>;
}