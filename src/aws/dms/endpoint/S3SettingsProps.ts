import { Value } from '../../../kloudformation/Value';

export interface S3SettingsProps {
  externalTableDefinition?: Value<string>
  bucketName?: Value<string>
  bucketFolder?: Value<string>
  csvRowDelimiter?: Value<string>
  csvDelimiter?: Value<string>
  serviceAccessRoleArn?: Value<string>
  compressionType?: Value<string>
}