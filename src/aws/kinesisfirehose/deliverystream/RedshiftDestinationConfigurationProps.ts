import { CloudWatchLoggingOptionsProps } from './CloudWatchLoggingOptionsProps';
import { Value } from '../../../kloudformation/Value';
import { CopyCommandProps } from './CopyCommandProps';
import { ProcessingConfigurationProps } from './ProcessingConfigurationProps';
import { RedshiftRetryOptionsProps } from './RedshiftRetryOptionsProps';
import { S3DestinationConfigurationProps } from './S3DestinationConfigurationProps';

export interface RedshiftDestinationConfigurationProps {
  cloudWatchLoggingOptions?: CloudWatchLoggingOptionsProps
  clusterJDBCURL: Value<string>
  copyCommand: CopyCommandProps
  password: Value<string>
  processingConfiguration?: ProcessingConfigurationProps
  retryOptions?: RedshiftRetryOptionsProps
  roleARN: Value<string>
  s3BackupConfiguration?: S3DestinationConfigurationProps
  s3BackupMode?: Value<string>
  s3Configuration: S3DestinationConfigurationProps
  username: Value<string>
}