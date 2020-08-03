import { DockerVolumeConfigurationProps } from './DockerVolumeConfigurationProps';
import { EFSVolumeConfigurationProps } from './EFSVolumeConfigurationProps';
import { HostVolumePropertiesProps } from './HostVolumePropertiesProps';
import { Value } from '../../../kloudformation/Value';

export interface VolumeProps {
  dockerVolumeConfiguration?: DockerVolumeConfigurationProps
  eFSVolumeConfiguration?: EFSVolumeConfigurationProps
  host?: HostVolumePropertiesProps
  name?: Value<string>
}