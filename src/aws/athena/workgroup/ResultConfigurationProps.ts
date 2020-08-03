import { EncryptionConfigurationProps } from './EncryptionConfigurationProps';
import { Value } from '../../../kloudformation/Value';

export interface ResultConfigurationProps {
  encryptionConfiguration?: EncryptionConfigurationProps
  outputLocation?: Value<string>
}