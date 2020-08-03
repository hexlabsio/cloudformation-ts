import { Value } from '../../../kloudformation/Value';

export interface AccessLoggingPolicyProps {
  emitInterval?: Value<number>
  enabled: Value<boolean>
  s3BucketName: Value<string>
  s3BucketPrefix?: Value<string>
}