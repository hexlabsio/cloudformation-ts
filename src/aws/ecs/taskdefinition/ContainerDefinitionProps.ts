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
import { SystemControlProps } from './SystemControlProps';
import { UlimitProps } from './UlimitProps';
import { VolumeFromProps } from './VolumeFromProps';

export function containerDefinitionProps(containerDefinitionPropsProps: ContainerDefinitionProps): ContainerDefinitionProps { return (containerDefinitionPropsProps) as unknown as ContainerDefinitionProps }

export interface ContainerDefinitionProps {
    command?: Value<Value<string>[]>;
    cpu?: Value<number>;
    dependsOn?: ContainerDependencyProps[];
    disableNetworking?: Value<boolean>;
    dnsSearchDomains?: Value<Value<string>[]>;
    dnsServers?: Value<Value<string>[]>;
    dockerLabels?: { [key: string]: Value<string> };
    dockerSecurityOptions?: Value<Value<string>[]>;
    entryPoint?: Value<Value<string>[]>;
    environment?: KeyValuePairProps[];
    essential?: Value<boolean>;
    extraHosts?: HostEntryProps[];
    firelensConfiguration?: FirelensConfigurationProps;
    healthCheck?: HealthCheckProps;
    hostname?: Value<string>;
    image?: Value<string>;
    interactive?: Value<boolean>;
    links?: Value<Value<string>[]>;
    linuxParameters?: LinuxParametersProps;
    logConfiguration?: LogConfigurationProps;
    memory?: Value<number>;
    memoryReservation?: Value<number>;
    mountPoints?: MountPointProps[];
    name?: Value<string>;
    portMappings?: PortMappingProps[];
    privileged?: Value<boolean>;
    pseudoTerminal?: Value<boolean>;
    readonlyRootFilesystem?: Value<boolean>;
    repositoryCredentials?: RepositoryCredentialsProps;
    resourceRequirements?: ResourceRequirementProps[];
    secrets?: SecretProps[];
    startTimeout?: Value<number>;
    stopTimeout?: Value<number>;
    systemControls?: SystemControlProps[];
    ulimits?: UlimitProps[];
    user?: Value<string>;
    volumesFrom?: VolumeFromProps[];
    workingDirectory?: Value<string>;
}