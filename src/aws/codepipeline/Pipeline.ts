import { ArtifactStoreProps } from './pipeline/ArtifactStoreProps';
import { ArtifactStoreMapProps } from './pipeline/ArtifactStoreMapProps';
import { StageTransitionProps } from './pipeline/StageTransitionProps';
import { Value } from '../../kloudformation/Value';
import { StageDeclarationProps } from './pipeline/StageDeclarationProps';
import { Tag } from '../Tag';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type PipelineAttributes = { Version: Attribute<string> }
export function pipeline(pipelineProps: Pipeline): Pipeline & {attributes: PipelineAttributes} { return ({ ...pipelineProps, _logicalType: 'AWS::CodePipeline::Pipeline', attributes: { Version: 'Version' } }) }
   
export interface Pipeline extends KloudResource {
  artifactStore?: ArtifactStoreProps
  artifactStores?: ArtifactStoreMapProps[]
  disableInboundStageTransitions?: StageTransitionProps[]
  name?: Value<string>
  restartExecutionOnUpdate?: Value<boolean>
  roleArn: Value<string>
  stages: StageDeclarationProps[]
  tags?: Tag[]
}