import { Value } from '../../../kloudformation/Value';

export interface S3EncryptionProps {
  kmsKeyArn?: Value<string>
  s3EncryptionMode?: Value<string>
}