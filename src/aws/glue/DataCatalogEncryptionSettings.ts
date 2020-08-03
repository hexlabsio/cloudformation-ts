import { DataCatalogEncryptionSettingsProps } from './dataCatalogEncryptionSettings/DataCatalogEncryptionSettingsProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function dataCatalogEncryptionSettings(dataCatalogEncryptionSettingsProps: DataCatalogEncryptionSettings): DataCatalogEncryptionSettings { return ({ ...dataCatalogEncryptionSettingsProps, _logicalType: '' }) }
  
export interface DataCatalogEncryptionSettings extends KloudResource {
  dataCatalogEncryptionSettings: DataCatalogEncryptionSettingsProps
  catalogId: Value<string>
}