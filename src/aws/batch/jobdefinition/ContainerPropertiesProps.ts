import { Value } from '../../../kloudformation/Value';
import { LinuxParametersProps } from './LinuxParametersProps';
import { ResourceRequirementProps } from './ResourceRequirementProps';
import { MountPointsProps } from './MountPointsProps';
import { VolumesProps } from './VolumesProps';
import { EnvironmentProps } from './EnvironmentProps';
import { UlimitProps } from './UlimitProps';

export interface ContainerPropertiesProps {
  user?: Value<string>
  memory?: Value<number>
  privileged?: Value<boolean>
  linuxParameters?: LinuxParametersProps
  jobRoleArn?: Value<string>
  readonlyRootFilesystem?: Value<boolean>
  vcpus?: Value<number>
  image: Value<string>
  resourceRequirements?: ResourceRequirementProps[]
  mountPoints?: MountPointsProps[]
  volumes?: VolumesProps[]
  command?: Value<Value<string>[]>
  environment?: EnvironmentProps[]
  ulimits?: UlimitProps[]
  instanceType?: Value<string>
}