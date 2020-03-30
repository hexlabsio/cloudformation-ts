import { Value } from '../../../kloudformation/Value';

export function volumesHostProps(volumesHostPropsProps: VolumesHostProps): VolumesHostProps { return (volumesHostPropsProps) as unknown as VolumesHostProps }

export interface VolumesHostProps {
    sourcePath?: Value<string>;
}