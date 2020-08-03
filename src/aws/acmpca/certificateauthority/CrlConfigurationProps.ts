import { Value } from '../../../kloudformation/Value';

export interface CrlConfigurationProps {
  enabled?: Value<boolean>
  expirationInDays?: Value<number>
  customCname?: Value<string>
  s3BucketName?: Value<string>
}