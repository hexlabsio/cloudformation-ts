import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { ActivityProps } from './pipeline/ActivityProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function pipeline(pipelineProps: Pipeline): Pipeline { return ({ ...pipelineProps, _logicalType: '' }) }
  
export interface Pipeline extends KloudResource {
  pipelineName?: Value<string>
  tags?: Tag[]
  pipelineActivities: ActivityProps[]
}