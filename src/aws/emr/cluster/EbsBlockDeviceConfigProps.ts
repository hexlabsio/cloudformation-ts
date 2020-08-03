import { VolumeSpecificationProps } from './VolumeSpecificationProps';
import { Value } from '../../../kloudformation/Value';

export interface EbsBlockDeviceConfigProps {
  volumeSpecification: VolumeSpecificationProps
  volumesPerInstance?: Value<number>
}