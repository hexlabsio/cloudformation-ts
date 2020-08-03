import { EbsProps } from './EbsProps';
import { Value } from '../../../kloudformation/Value';

export interface BlockDeviceMappingProps {
  ebs?: EbsProps
  noDevice?: Value<string>
  virtualName?: Value<string>
  deviceName?: Value<string>
}