import { Value } from '../../../kloudformation/Value';
import { GroupOwnerSettingProps } from './GroupOwnerSettingProps';

export interface LocalVolumeResourceDataProps {
  sourcePath: Value<string>
  destinationPath: Value<string>
  groupOwnerSetting?: GroupOwnerSettingProps
}