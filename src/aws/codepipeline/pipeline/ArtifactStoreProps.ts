import { EncryptionKeyProps } from './EncryptionKeyProps';
import { Value } from '../../../kloudformation/Value';

export interface ArtifactStoreProps {
  encryptionKey?: EncryptionKeyProps
  location: Value<string>
  type: Value<string>
}