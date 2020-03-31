import { Value } from '../../../kloudformation/Value';

export function volumesHostProps(volumesHostPropsProps: VolumesHostProps): VolumesHostProps { return (volumesHostPropsProps) }

export interface VolumesHostProps {
    sourcePath?: Value<string>;
}