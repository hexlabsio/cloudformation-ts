import { Value } from '../../../kloudformation/Value';

export interface NeptuneSettingsProps {
  maxRetryCount?: Value<number>
  maxFileSize?: Value<number>
  s3BucketFolder?: Value<string>
  errorRetryDuration?: Value<number>
  iamAuthEnabled?: Value<boolean>
  s3BucketName?: Value<string>
  serviceAccessRoleArn?: Value<string>
}