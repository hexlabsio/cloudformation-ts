import { Value } from '../../../kloudformation/Value';

export interface S3LocationProps {
  objectVersion?: Value<string>
  bucket: Value<string>
  key: Value<string>
  roleArn: Value<string>
}