import { Value } from '../../../kloudformation/Value';

export function volumeFromProps(volumeFromPropsProps: VolumeFromProps): VolumeFromProps { return (volumeFromPropsProps) as unknown as VolumeFromProps }

export interface VolumeFromProps {
    readOnly?: Value<boolean>;
    sourceContainer?: Value<string>;
}