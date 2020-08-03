import { Value } from '../../../kloudformation/Value';

export interface LoggingInfoProps {
  s3Bucket: Value<string>
  region: Value<string>
  s3Prefix?: Value<string>
}