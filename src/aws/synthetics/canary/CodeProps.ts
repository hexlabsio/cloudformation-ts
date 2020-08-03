import { Value } from '../../../kloudformation/Value';

export interface CodeProps {
  s3Bucket?: Value<string>
  s3Key?: Value<string>
  s3ObjectVersion?: Value<string>
  script?: Value<string>
  handler?: Value<string>
}