import { Value } from '../../../kloudformation/Value';

export function hostVolumePropertiesProps(hostVolumePropertiesPropsProps: HostVolumePropertiesProps): HostVolumePropertiesProps { return (hostVolumePropertiesPropsProps) }

export interface HostVolumePropertiesProps {
    sourcePath?: Value<string>;
}