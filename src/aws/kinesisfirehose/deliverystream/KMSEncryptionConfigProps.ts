import { Value } from '../../../kloudformation/Value';

export interface KMSEncryptionConfigProps {
  aWSKMSKeyARN: Value<string>
}