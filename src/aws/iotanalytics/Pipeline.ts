import { ActivityProps } from './pipeline/ActivityProps';
import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function pipeline(pipelineProps: Pipeline & { logicalName?: string }): Pipeline { return ({ ...pipelineProps, _logicalType: 'AWS::IoTAnalytics::Pipeline' }) as unknown as Pipeline }

export interface Pipeline extends KloudResource {
    pipelineActivities: ActivityProps[];
    pipelineName?: Value<string>;
    tags?: Tag[];
}