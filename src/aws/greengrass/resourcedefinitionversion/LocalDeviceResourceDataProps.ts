import { Value } from '../../../kloudformation/Value';
import { GroupOwnerSettingProps } from './GroupOwnerSettingProps';

export interface LocalDeviceResourceDataProps {
  sourcePath: Value<string>
  groupOwnerSetting?: GroupOwnerSettingProps
}