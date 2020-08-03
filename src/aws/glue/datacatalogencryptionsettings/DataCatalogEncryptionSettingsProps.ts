import { ConnectionPasswordEncryptionProps } from './ConnectionPasswordEncryptionProps';
import { EncryptionAtRestProps } from './EncryptionAtRestProps';

export interface DataCatalogEncryptionSettingsProps {
  connectionPasswordEncryption?: ConnectionPasswordEncryptionProps
  encryptionAtRest?: EncryptionAtRestProps
}