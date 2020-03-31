import { S3EncryptionProps } from './S3EncryptionProps';
import { CloudWatchEncryptionProps } from './CloudWatchEncryptionProps';
import { JobBookmarksEncryptionProps } from './JobBookmarksEncryptionProps';

export function encryptionConfigurationProps(encryptionConfigurationPropsProps: EncryptionConfigurationProps): EncryptionConfigurationProps { return (encryptionConfigurationPropsProps) }

export interface EncryptionConfigurationProps {
    s3Encryptions?: S3EncryptionProps[];
    cloudWatchEncryption?: CloudWatchEncryptionProps;
    jobBookmarksEncryption?: JobBookmarksEncryptionProps;
}