import { Value } from '../../../kloudformation/Value';
import { GroupOwnerSettingProps } from './GroupOwnerSettingProps';

export function localVolumeResourceDataProps(localVolumeResourceDataPropsProps: LocalVolumeResourceDataProps): LocalVolumeResourceDataProps { return (localVolumeResourceDataPropsProps) as unknown as LocalVolumeResourceDataProps }

export interface LocalVolumeResourceDataProps {
    sourcePath: Value<string>;
    destinationPath: Value<string>;
    groupOwnerSetting?: GroupOwnerSettingProps;
}