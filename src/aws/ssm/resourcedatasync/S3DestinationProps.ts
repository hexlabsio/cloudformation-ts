import { Value } from '../../../kloudformation/Value';

export interface S3DestinationProps {
  kMSKeyArn?: Value<string>
  bucketName: Value<string>
  bucketRegion: Value<string>
  syncFormat: Value<string>
  bucketPrefix?: Value<string>
}