import { DataLakePrincipalProps } from './datalakesettings/DataLakePrincipalProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function dataLakeSettings(dataLakeSettingsProps: DataLakeSettings & { logicalName?: string }): DataLakeSettings { return ({ ...dataLakeSettingsProps, _logicalType: 'AWS::LakeFormation::DataLakeSettings' }) as unknown as DataLakeSettings }

export interface DataLakeSettings extends KloudResource {
    admins?: DataLakePrincipalProps[];
}