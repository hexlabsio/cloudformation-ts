import { Value } from '../../../kloudformation/Value';

export function volumeSpecificationProps(volumeSpecificationPropsProps: VolumeSpecificationProps): VolumeSpecificationProps { return (volumeSpecificationPropsProps) }

export interface VolumeSpecificationProps {
    sizeInGB: Value<number>;
    volumeType: Value<string>;
    iops?: Value<number>;
}