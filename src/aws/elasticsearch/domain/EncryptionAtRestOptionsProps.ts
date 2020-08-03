import { Value } from '../../../kloudformation/Value';

export interface EncryptionAtRestOptionsProps {
  enabled?: Value<boolean>
  kmsKeyId?: Value<string>
}