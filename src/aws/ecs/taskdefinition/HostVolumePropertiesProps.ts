import { Value } from '../../../kloudformation/Value';

export function hostVolumePropertiesProps(hostVolumePropertiesPropsProps: HostVolumePropertiesProps): HostVolumePropertiesProps { return (hostVolumePropertiesPropsProps) as unknown as HostVolumePropertiesProps }

export interface HostVolumePropertiesProps {
    sourcePath?: Value<string>;
}