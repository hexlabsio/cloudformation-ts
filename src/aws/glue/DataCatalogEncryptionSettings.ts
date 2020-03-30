import { DataCatalogEncryptionSettingsProps } from './datacatalogencryptionsettings/DataCatalogEncryptionSettingsProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function dataCatalogEncryptionSettings(dataCatalogEncryptionSettingsProps: DataCatalogEncryptionSettings & { logicalName?: string }): DataCatalogEncryptionSettings { return ({ ...dataCatalogEncryptionSettingsProps, _logicalType: 'AWS::Glue::DataCatalogEncryptionSettings' }) as unknown as DataCatalogEncryptionSettings }

export interface DataCatalogEncryptionSettings extends KloudResource {
    dataCatalogEncryptionSettings: DataCatalogEncryptionSettingsProps;
    catalogId: Value<string>;
}