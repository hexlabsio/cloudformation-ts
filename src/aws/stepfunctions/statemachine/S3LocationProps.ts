import { Value } from '../../../kloudformation/Value';

export interface S3LocationProps {
  bucket: Value<string>
  version?: Value<string>
  key: Value<string>
}