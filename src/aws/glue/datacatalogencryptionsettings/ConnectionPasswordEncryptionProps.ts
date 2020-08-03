import { Value } from '../../../kloudformation/Value';

export interface ConnectionPasswordEncryptionProps {
  returnConnectionPasswordEncrypted?: Value<boolean>
  kmsKeyId?: Value<string>
}