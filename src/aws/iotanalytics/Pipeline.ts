import { ActivityProps } from './pipeline/ActivityProps';
import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export type PipelineAttributes = {  }
export function pipeline(pipelineProps: Pipeline): Pipeline & { attributes: PipelineAttributes } { return ({ ...pipelineProps, _logicalType: 'AWS::IoTAnalytics::Pipeline', attributes: {  } }) }

export interface Pipeline extends KloudResource {
    pipelineActivities: ActivityProps[];
    pipelineName?: Value<string>;
    tags?: Tag[];
}