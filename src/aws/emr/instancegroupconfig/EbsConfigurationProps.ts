import { EbsBlockDeviceConfigProps } from './EbsBlockDeviceConfigProps';
import { Value } from '../../../kloudformation/Value';

export interface EbsConfigurationProps {
  ebsBlockDeviceConfigs?: EbsBlockDeviceConfigProps[]
  ebsOptimized?: Value<boolean>
}