import { Value } from '../../../kloudformation/Value';

export function s3SettingsProps(s3SettingsPropsProps: S3SettingsProps): S3SettingsProps { return (s3SettingsPropsProps) }

export interface S3SettingsProps {
    externalTableDefinition?: Value<string>;
    bucketName?: Value<string>;
    bucketFolder?: Value<string>;
    csvRowDelimiter?: Value<string>;
    csvDelimiter?: Value<string>;
    serviceAccessRoleArn?: Value<string>;
    compressionType?: Value<string>;
}