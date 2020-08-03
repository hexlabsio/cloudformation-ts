import { Value } from '../../../kloudformation/Value';

export interface SourceConfigProps {
  s3Bucket: Value<string>
  architecture: Value<string>
  s3Key: Value<string>
}