import { DataCatalogEncryptionSettingsProps } from './datacatalogencryptionsettings/DataCatalogEncryptionSettingsProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type DataCatalogEncryptionSettingsAttributes = {  }
export function dataCatalogEncryptionSettings(dataCatalogEncryptionSettingsProps: DataCatalogEncryptionSettings): DataCatalogEncryptionSettings & { attributes: DataCatalogEncryptionSettingsAttributes } { return ({ ...dataCatalogEncryptionSettingsProps, _logicalType: 'AWS::Glue::DataCatalogEncryptionSettings', attributes: {  } }) }

export interface DataCatalogEncryptionSettings extends KloudResource {
    dataCatalogEncryptionSettings: DataCatalogEncryptionSettingsProps;
    catalogId: Value<string>;
}