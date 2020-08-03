import { AdminsProps } from './dataLakeSettings/AdminsProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function dataLakeSettings(dataLakeSettingsProps: DataLakeSettings): DataLakeSettings { return ({ ...dataLakeSettingsProps, _logicalType: '' }) }
  
export interface DataLakeSettings extends KloudResource {
  admins?: AdminsProps
}