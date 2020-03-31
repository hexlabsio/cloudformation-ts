import { DataLakePrincipalProps } from './datalakesettings/DataLakePrincipalProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type DataLakeSettingsAttributes = {  }
export function dataLakeSettings(dataLakeSettingsProps: DataLakeSettings): DataLakeSettings & { attributes: DataLakeSettingsAttributes } { return ({ ...dataLakeSettingsProps, _logicalType: 'AWS::LakeFormation::DataLakeSettings', attributes: {  } }) }

export interface DataLakeSettings extends KloudResource {
    admins?: DataLakePrincipalProps[];
}