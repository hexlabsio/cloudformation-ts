import { Value } from '../../../kloudformation/Value';
import { GroupOwnerSettingProps } from './GroupOwnerSettingProps';

export function localDeviceResourceDataProps(localDeviceResourceDataPropsProps: LocalDeviceResourceDataProps): LocalDeviceResourceDataProps { return (localDeviceResourceDataPropsProps) as unknown as LocalDeviceResourceDataProps }

export interface LocalDeviceResourceDataProps {
    sourcePath: Value<string>;
    groupOwnerSetting?: GroupOwnerSettingProps;
}