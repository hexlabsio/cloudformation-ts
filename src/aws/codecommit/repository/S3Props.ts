import { Value } from '../../../kloudformation/Value';

export interface S3Props {
  objectVersion?: Value<string>
  bucket: Value<string>
  key: Value<string>
}