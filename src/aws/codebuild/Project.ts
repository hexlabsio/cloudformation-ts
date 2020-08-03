import { Value } from '../../kloudformation/Value';
import { VpcConfigProps } from './project/VpcConfigProps';
import { SourceProps } from './project/SourceProps';
import { ProjectTriggersProps } from './project/ProjectTriggersProps';
import { ArtifactsProps } from './project/ArtifactsProps';
import { LogsConfigProps } from './project/LogsConfigProps';
import { ProjectFileSystemLocationProps } from './project/ProjectFileSystemLocationProps';
import { EnvironmentProps } from './project/EnvironmentProps';
import { ProjectSourceVersionProps } from './project/ProjectSourceVersionProps';
import { ProjectBuildBatchConfigProps } from './project/ProjectBuildBatchConfigProps';
import { Tag } from '../Tag';
import { ProjectCacheProps } from './project/ProjectCacheProps';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type ProjectAttributes = { Arn: Attribute<string> }
export function project(projectProps: Project): Project & {attributes: ProjectAttributes} { return ({ ...projectProps, _logicalType: 'AWS::CodeBuild::Project', attributes: { Arn: 'Arn' } }) }
   
export interface Project extends KloudResource {
  description?: Value<string>
  vpcConfig?: VpcConfigProps
  secondarySources?: SourceProps[]
  encryptionKey?: Value<string>
  sourceVersion?: Value<string>
  triggers?: ProjectTriggersProps
  secondaryArtifacts?: ArtifactsProps[]
  source: SourceProps
  name?: Value<string>
  artifacts: ArtifactsProps
  badgeEnabled?: Value<boolean>
  logsConfig?: LogsConfigProps
  serviceRole: Value<string>
  queuedTimeoutInMinutes?: Value<number>
  fileSystemLocations?: ProjectFileSystemLocationProps[]
  environment: EnvironmentProps
  secondarySourceVersions?: ProjectSourceVersionProps[]
  buildBatchConfig?: ProjectBuildBatchConfigProps
  tags?: Tag[]
  timeoutInMinutes?: Value<number>
  cache?: ProjectCacheProps
}