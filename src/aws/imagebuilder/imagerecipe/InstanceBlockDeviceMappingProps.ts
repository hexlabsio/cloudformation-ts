import { Value } from '../../../kloudformation/Value';
import { EbsInstanceBlockDeviceSpecificationProps } from './EbsInstanceBlockDeviceSpecificationProps';

export interface InstanceBlockDeviceMappingProps {
  deviceName?: Value<string>
  virtualName?: Value<string>
  noDevice?: Value<string>
  ebs?: EbsInstanceBlockDeviceSpecificationProps
}