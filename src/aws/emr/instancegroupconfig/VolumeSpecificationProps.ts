import { Value } from '../../../kloudformation/Value';

export function volumeSpecificationProps(volumeSpecificationPropsProps: VolumeSpecificationProps): VolumeSpecificationProps { return (volumeSpecificationPropsProps) as unknown as VolumeSpecificationProps }

export interface VolumeSpecificationProps {
    sizeInGB: Value<number>;
    volumeType: Value<string>;
    iops?: Value<number>;
}