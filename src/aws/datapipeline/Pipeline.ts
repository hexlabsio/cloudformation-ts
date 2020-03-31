import { Value } from '../../kloudformation/Value';
import { ParameterObjectProps } from './pipeline/ParameterObjectProps';
import { ParameterValueProps } from './pipeline/ParameterValueProps';
import { PipelineObjectProps } from './pipeline/PipelineObjectProps';
import { PipelineTagProps } from './pipeline/PipelineTagProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type PipelineAttributes = {  }
export function pipeline(pipelineProps: Pipeline): Pipeline & { attributes: PipelineAttributes } { return ({ ...pipelineProps, _logicalType: 'AWS::DataPipeline::Pipeline', attributes: {  } }) }

export interface Pipeline extends KloudResource {
    name: Value<string>;
    parameterObjects: ParameterObjectProps[];
    activate?: Value<boolean>;
    description?: Value<string>;
    parameterValues?: ParameterValueProps[];
    pipelineObjects?: PipelineObjectProps[];
    pipelineTags?: PipelineTagProps[];
}