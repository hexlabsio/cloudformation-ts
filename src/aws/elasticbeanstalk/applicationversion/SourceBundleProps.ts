import { Value } from '../../../kloudformation/Value';

export interface SourceBundleProps {
  s3Bucket: Value<string>
  s3Key: Value<string>
}