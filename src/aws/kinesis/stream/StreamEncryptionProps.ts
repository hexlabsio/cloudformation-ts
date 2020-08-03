import { Value } from '../../../kloudformation/Value';

export interface StreamEncryptionProps {
  encryptionType: Value<string>
  keyId: Value<string>
}