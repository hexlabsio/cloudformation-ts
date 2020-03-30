import { Value } from '../../../kloudformation/Value';

export function volumeProps(volumePropsProps: VolumeProps): VolumeProps { return (volumePropsProps) as unknown as VolumeProps }

export interface VolumeProps {
    device: Value<string>;
    volumeId: Value<string>;
}