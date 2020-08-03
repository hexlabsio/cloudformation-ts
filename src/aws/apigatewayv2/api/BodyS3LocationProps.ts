import { Value } from '../../../kloudformation/Value';

export interface BodyS3LocationProps {
  etag?: Value<string>
  bucket?: Value<string>
  version?: Value<string>
  key?: Value<string>
}