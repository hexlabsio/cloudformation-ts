import { S3EncryptionsProps } from './S3EncryptionsProps';
import { CloudWatchEncryptionProps } from './CloudWatchEncryptionProps';
import { JobBookmarksEncryptionProps } from './JobBookmarksEncryptionProps';

export interface EncryptionConfigurationProps {
  s3Encryptions?: S3EncryptionsProps
  cloudWatchEncryption?: CloudWatchEncryptionProps
  jobBookmarksEncryption?: JobBookmarksEncryptionProps
}