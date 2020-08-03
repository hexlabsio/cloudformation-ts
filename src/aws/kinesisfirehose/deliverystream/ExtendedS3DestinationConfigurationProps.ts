import { Value } from '../../../kloudformation/Value';
import { BufferingHintsProps } from './BufferingHintsProps';
import { CloudWatchLoggingOptionsProps } from './CloudWatchLoggingOptionsProps';
import { DataFormatConversionConfigurationProps } from './DataFormatConversionConfigurationProps';
import { EncryptionConfigurationProps } from './EncryptionConfigurationProps';
import { ProcessingConfigurationProps } from './ProcessingConfigurationProps';
import { S3DestinationConfigurationProps } from './S3DestinationConfigurationProps';

export interface ExtendedS3DestinationConfigurationProps {
  bucketARN: Value<string>
  bufferingHints?: BufferingHintsProps
  cloudWatchLoggingOptions?: CloudWatchLoggingOptionsProps
  compressionFormat?: Value<string>
  dataFormatConversionConfiguration?: DataFormatConversionConfigurationProps
  encryptionConfiguration?: EncryptionConfigurationProps
  errorOutputPrefix?: Value<string>
  prefix?: Value<string>
  processingConfiguration?: ProcessingConfigurationProps
  roleARN: Value<string>
  s3BackupConfiguration?: S3DestinationConfigurationProps
  s3BackupMode?: Value<string>
}