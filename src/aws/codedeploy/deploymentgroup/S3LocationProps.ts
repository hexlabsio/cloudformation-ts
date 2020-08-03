import { Value } from '../../../kloudformation/Value';

export interface S3LocationProps {
  bucket: Value<string>
  bundleType?: Value<string>
  eTag?: Value<string>
  key: Value<string>
  version?: Value<string>
}