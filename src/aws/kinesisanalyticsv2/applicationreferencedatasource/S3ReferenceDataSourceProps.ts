import { Value } from '../../../kloudformation/Value';

export interface S3ReferenceDataSourceProps {
  bucketARN: Value<string>
  fileKey: Value<string>
}