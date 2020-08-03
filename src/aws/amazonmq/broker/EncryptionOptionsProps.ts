import { Value } from '../../../kloudformation/Value';

export interface EncryptionOptionsProps {
  kmsKeyId?: Value<string>
  useAwsOwnedKey: Value<boolean>
}