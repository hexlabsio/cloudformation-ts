import { Value } from '../../../kloudformation/Value';

export interface S3LocationProps {
  bucket: Value<string>
  key: Value<string>
  objectVersion?: Value<string>
  roleArn: Value<string>
}