import { Value } from '../../../kloudformation/Value';

export interface S3LogsProps {
  s3BucketName?: Value<string>
  s3KeyPrefix?: Value<string>
}