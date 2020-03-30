import { ConnectionPasswordEncryptionProps } from './ConnectionPasswordEncryptionProps';
import { EncryptionAtRestProps } from './EncryptionAtRestProps';

export function dataCatalogEncryptionSettingsProps(dataCatalogEncryptionSettingsPropsProps: DataCatalogEncryptionSettingsProps): DataCatalogEncryptionSettingsProps { return (dataCatalogEncryptionSettingsPropsProps) as unknown as DataCatalogEncryptionSettingsProps }

export interface DataCatalogEncryptionSettingsProps {
    connectionPasswordEncryption?: ConnectionPasswordEncryptionProps;
    encryptionAtRest?: EncryptionAtRestProps;
}