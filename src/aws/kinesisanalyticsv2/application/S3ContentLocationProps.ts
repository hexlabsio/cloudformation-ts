import { Value } from '../../../kloudformation/Value';

export interface S3ContentLocationProps {
  bucketARN?: Value<string>
  fileKey?: Value<string>
  objectVersion?: Value<string>
}