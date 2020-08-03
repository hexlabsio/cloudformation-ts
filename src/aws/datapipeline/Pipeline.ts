import { Value } from '../../kloudformation/Value';
import { ParameterObjectProps } from './pipeline/ParameterObjectProps';
import { ParameterValueProps } from './pipeline/ParameterValueProps';
import { PipelineObjectProps } from './pipeline/PipelineObjectProps';
import { PipelineTagProps } from './pipeline/PipelineTagProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function pipeline(pipelineProps: Pipeline): Pipeline { return ({ ...pipelineProps, _logicalType: '' }) }
  
export interface Pipeline extends KloudResource {
  activate?: Value<boolean>
  description?: Value<string>
  name: Value<string>
  parameterObjects: ParameterObjectProps[]
  parameterValues?: ParameterValueProps[]
  pipelineObjects?: PipelineObjectProps[]
  pipelineTags?: PipelineTagProps[]
}