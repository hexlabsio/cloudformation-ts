import { Value } from '../../../kloudformation/Value';

export interface ContentProps {
  s3ObjectVersion?: Value<string>
  s3Bucket: Value<string>
  s3Key: Value<string>
}