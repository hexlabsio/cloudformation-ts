import { Value } from '../../../kloudformation/Value';
import { BufferingHintsProps } from './BufferingHintsProps';
import { CloudWatchLoggingOptionsProps } from './CloudWatchLoggingOptionsProps';
import { EncryptionConfigurationProps } from './EncryptionConfigurationProps';

export interface S3DestinationConfigurationProps {
  bucketARN: Value<string>
  bufferingHints?: BufferingHintsProps
  cloudWatchLoggingOptions?: CloudWatchLoggingOptionsProps
  compressionFormat?: Value<string>
  encryptionConfiguration?: EncryptionConfigurationProps
  errorOutputPrefix?: Value<string>
  prefix?: Value<string>
  roleARN: Value<string>
}