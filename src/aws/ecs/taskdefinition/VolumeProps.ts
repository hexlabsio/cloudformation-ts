import { DockerVolumeConfigurationProps } from './DockerVolumeConfigurationProps';
import { HostVolumePropertiesProps } from './HostVolumePropertiesProps';
import { Value } from '../../../kloudformation/Value';

export function volumeProps(volumePropsProps: VolumeProps): VolumeProps { return (volumePropsProps) as unknown as VolumeProps }

export interface VolumeProps {
    dockerVolumeConfiguration?: DockerVolumeConfigurationProps;
    host?: HostVolumePropertiesProps;
    name?: Value<string>;
}