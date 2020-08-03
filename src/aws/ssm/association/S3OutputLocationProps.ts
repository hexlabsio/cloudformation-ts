import { Value } from '../../../kloudformation/Value';

export interface S3OutputLocationProps {
  outputS3Region?: Value<string>
  outputS3BucketName?: Value<string>
  outputS3KeyPrefix?: Value<string>
}