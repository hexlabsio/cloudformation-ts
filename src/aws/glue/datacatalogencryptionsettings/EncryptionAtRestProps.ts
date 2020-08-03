import { Value } from '../../../kloudformation/Value';

export interface EncryptionAtRestProps {
  catalogEncryptionMode?: Value<string>
  sseAwsKmsKeyId?: Value<string>
}