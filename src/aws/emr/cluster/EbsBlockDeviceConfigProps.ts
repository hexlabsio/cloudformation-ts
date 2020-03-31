import { VolumeSpecificationProps } from './VolumeSpecificationProps';
import { Value } from '../../../kloudformation/Value';

export function ebsBlockDeviceConfigProps(ebsBlockDeviceConfigPropsProps: EbsBlockDeviceConfigProps): EbsBlockDeviceConfigProps { return (ebsBlockDeviceConfigPropsProps) }

export interface EbsBlockDeviceConfigProps {
    volumeSpecification: VolumeSpecificationProps;
    volumesPerInstance?: Value<number>;
}