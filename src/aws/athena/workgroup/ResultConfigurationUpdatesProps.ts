import { EncryptionConfigurationProps } from './EncryptionConfigurationProps';
import { Value } from '../../../kloudformation/Value';

export interface ResultConfigurationUpdatesProps {
  encryptionConfiguration?: EncryptionConfigurationProps
  outputLocation?: Value<string>
  removeEncryptionConfiguration?: Value<boolean>
  removeOutputLocation?: Value<boolean>
}