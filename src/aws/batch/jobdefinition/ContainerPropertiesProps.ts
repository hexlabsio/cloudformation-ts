import { Value } from '../../../kloudformation/Value';
import { LinuxParametersProps } from './LinuxParametersProps';
import { ResourceRequirementProps } from './ResourceRequirementProps';
import { MountPointsProps } from './MountPointsProps';
import { VolumesProps } from './VolumesProps';
import { EnvironmentProps } from './EnvironmentProps';
import { UlimitProps } from './UlimitProps';

export function containerPropertiesProps(containerPropertiesPropsProps: ContainerPropertiesProps): ContainerPropertiesProps { return (containerPropertiesPropsProps) as unknown as ContainerPropertiesProps }

export interface ContainerPropertiesProps {
    memory: Value<number>;
    vcpus: Value<number>;
    image: Value<string>;
    user?: Value<string>;
    privileged?: Value<boolean>;
    linuxParameters?: LinuxParametersProps;
    jobRoleArn?: Value<string>;
    readonlyRootFilesystem?: Value<boolean>;
    resourceRequirements?: ResourceRequirementProps[];
    mountPoints?: MountPointsProps[];
    volumes?: VolumesProps[];
    command?: Value<Value<string>[]>;
    environment?: EnvironmentProps[];
    ulimits?: UlimitProps[];
    instanceType?: Value<string>;
}