import { SourceProps } from './project/SourceProps';
import { ArtifactsProps } from './project/ArtifactsProps';
import { Value } from '../../kloudformation/Value';
import { EnvironmentProps } from './project/EnvironmentProps';
import { ProjectFileSystemLocationProps } from './project/ProjectFileSystemLocationProps';
import { VpcConfigProps } from './project/VpcConfigProps';
import { ProjectTriggersProps } from './project/ProjectTriggersProps';
import { LogsConfigProps } from './project/LogsConfigProps';
import { ProjectSourceVersionProps } from './project/ProjectSourceVersionProps';
import { Tag } from '../Tag';
import { ProjectCacheProps } from './project/ProjectCacheProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function project(projectProps: Project & { logicalName?: string }): Project { return ({ ...projectProps, _logicalType: 'AWS::CodeBuild::Project' }) as unknown as Project }

export interface Project extends KloudResource {
    source: SourceProps;
    artifacts: ArtifactsProps;
    serviceRole: Value<string>;
    environment: EnvironmentProps;
    fileSystemLocations?: ProjectFileSystemLocationProps[];
    description?: Value<string>;
    vpcConfig?: VpcConfigProps;
    secondarySources?: SourceProps[];
    encryptionKey?: Value<string>;
    sourceVersion?: Value<string>;
    triggers?: ProjectTriggersProps;
    secondaryArtifacts?: ArtifactsProps[];
    name?: Value<string>;
    badgeEnabled?: Value<boolean>;
    logsConfig?: LogsConfigProps;
    queuedTimeoutInMinutes?: Value<number>;
    secondarySourceVersions?: ProjectSourceVersionProps[];
    tags?: Tag[];
    timeoutInMinutes?: Value<number>;
    cache?: ProjectCacheProps;
}