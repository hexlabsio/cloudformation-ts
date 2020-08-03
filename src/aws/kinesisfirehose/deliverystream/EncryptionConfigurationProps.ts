import { KMSEncryptionConfigProps } from './KMSEncryptionConfigProps';
import { Value } from '../../../kloudformation/Value';

export interface EncryptionConfigurationProps {
  kMSEncryptionConfig?: KMSEncryptionConfigProps
  noEncryptionConfig?: Value<string>
}