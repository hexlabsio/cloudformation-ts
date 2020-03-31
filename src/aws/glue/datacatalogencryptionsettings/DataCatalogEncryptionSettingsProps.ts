import { ConnectionPasswordEncryptionProps } from './ConnectionPasswordEncryptionProps';
import { EncryptionAtRestProps } from './EncryptionAtRestProps';

export function dataCatalogEncryptionSettingsProps(dataCatalogEncryptionSettingsPropsProps: DataCatalogEncryptionSettingsProps): DataCatalogEncryptionSettingsProps { return (dataCatalogEncryptionSettingsPropsProps) }

export interface DataCatalogEncryptionSettingsProps {
    connectionPasswordEncryption?: ConnectionPasswordEncryptionProps;
    encryptionAtRest?: EncryptionAtRestProps;
}