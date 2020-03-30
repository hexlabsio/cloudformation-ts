import { Value } from '../../kloudformation/Value';
import { ParameterObjectProps } from './pipeline/ParameterObjectProps';
import { ParameterValueProps } from './pipeline/ParameterValueProps';
import { PipelineObjectProps } from './pipeline/PipelineObjectProps';
import { PipelineTagProps } from './pipeline/PipelineTagProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function pipeline(pipelineProps: Pipeline & { logicalName?: string }): Pipeline { return ({ ...pipelineProps, _logicalType: 'AWS::DataPipeline::Pipeline' }) as unknown as Pipeline }

export interface Pipeline extends KloudResource {
    name: Value<string>;
    parameterObjects: ParameterObjectProps[];
    activate?: Value<boolean>;
    description?: Value<string>;
    parameterValues?: ParameterValueProps[];
    pipelineObjects?: PipelineObjectProps[];
    pipelineTags?: PipelineTagProps[];
}