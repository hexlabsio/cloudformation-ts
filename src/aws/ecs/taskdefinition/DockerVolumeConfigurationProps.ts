import { Value } from '../../../kloudformation/Value';

export function dockerVolumeConfigurationProps(dockerVolumeConfigurationPropsProps: DockerVolumeConfigurationProps): DockerVolumeConfigurationProps { return (dockerVolumeConfigurationPropsProps) as unknown as DockerVolumeConfigurationProps }

export interface DockerVolumeConfigurationProps {
    autoprovision?: Value<boolean>;
    driver?: Value<string>;
    driverOpts?: { [key: string]: Value<string> };
    labels?: { [key: string]: Value<string> };
    scope?: Value<string>;
}