import { Value } from '../../../kloudformation/Value';

export interface EncryptionConfigurationProps {
  encryptionOption: Value<string>
  kmsKey?: Value<string>
}