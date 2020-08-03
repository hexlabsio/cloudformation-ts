import { Value } from '../../../kloudformation/Value';
import { ContainerDependencyProps } from './ContainerDependencyProps';
import { KeyValuePairProps } from './KeyValuePairProps';
import { HostEntryProps } from './HostEntryProps';
import { FirelensConfigurationProps } from './FirelensConfigurationProps';
import { HealthCheckProps } from './HealthCheckProps';
import { LinuxParametersProps } from './LinuxParametersProps';
import { LogConfigurationProps } from './LogConfigurationProps';
import { MountPointProps } from './MountPointProps';
import { PortMappingProps } from './PortMappingProps';
import { RepositoryCredentialsProps } from './RepositoryCredentialsProps';
import { ResourceRequirementProps } from './ResourceRequirementProps';
import { SecretProps } from './SecretProps';
import { UlimitProps } from './UlimitProps';
import { VolumeFromProps } from './VolumeFromProps';
import { SystemControlProps } from './SystemControlProps';

export interface ContainerDefinitionProps {
  command?: Value<Value<string>[]>
  cpu?: Value<number>
  dependsOn?: ContainerDependencyProps[]
  disableNetworking?: Value<boolean>
  dnsSearchDomains?: Value<Value<string>[]>
  dnsServers?: Value<Value<string>[]>
  dockerLabels?: Value<Value<string>[]>
  dockerSecurityOptions?: Value<Value<string>[]>
  entryPoint?: Value<Value<string>[]>
  environment?: KeyValuePairProps[]
  essential?: Value<boolean>
  extraHosts?: HostEntryProps[]
  firelensConfiguration?: FirelensConfigurationProps
  healthCheck?: HealthCheckProps
  hostname?: Value<string>
  image?: Value<string>
  links?: Value<Value<string>[]>
  linuxParameters?: LinuxParametersProps
  logConfiguration?: LogConfigurationProps
  memory?: Value<number>
  memoryReservation?: Value<number>
  mountPoints?: MountPointProps[]
  name?: Value<string>
  portMappings?: PortMappingProps[]
  privileged?: Value<boolean>
  readonlyRootFilesystem?: Value<boolean>
  repositoryCredentials?: RepositoryCredentialsProps
  resourceRequirements?: ResourceRequirementProps[]
  secrets?: SecretProps[]
  startTimeout?: Value<number>
  stopTimeout?: Value<number>
  ulimits?: UlimitProps[]
  user?: Value<string>
  volumesFrom?: VolumeFromProps[]
  workingDirectory?: Value<string>
  interactive?: Value<boolean>
  pseudoTerminal?: Value<boolean>
  systemControls?: SystemControlProps[]
}