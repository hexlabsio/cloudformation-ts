import { Value } from '../../../kloudformation/Value';
import { BlockDeviceProps } from './BlockDeviceProps';

export interface BlockDeviceMappingProps {
  deviceName: Value<string>
  ebs?: BlockDeviceProps
  noDevice?: Value<boolean>
  virtualName?: Value<string>
}