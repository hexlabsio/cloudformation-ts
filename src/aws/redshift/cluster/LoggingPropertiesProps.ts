import { Value } from '../../../kloudformation/Value';

export interface LoggingPropertiesProps {
  bucketName: Value<string>
  s3KeyPrefix?: Value<string>
}