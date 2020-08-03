import { Value } from '../../../kloudformation/Value';
import { EbsBlockDeviceProps } from './EbsBlockDeviceProps';

export interface BlockDeviceMappingProps {
  deviceName?: Value<string>
  ebs?: EbsBlockDeviceProps
  noDevice?: Value<string>
  virtualName?: Value<string>
}