import { Value } from '../../../kloudformation/Value';
import { GroupOwnerSettingProps } from './GroupOwnerSettingProps';

export function localVolumeResourceDataProps(localVolumeResourceDataPropsProps: LocalVolumeResourceDataProps): LocalVolumeResourceDataProps { return (localVolumeResourceDataPropsProps) }

export interface LocalVolumeResourceDataProps {
    sourcePath: Value<string>;
    destinationPath: Value<string>;
    groupOwnerSetting?: GroupOwnerSettingProps;
}