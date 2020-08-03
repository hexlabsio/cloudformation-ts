import { ComputeEnvironmentOrderProps } from './jobQueue/ComputeEnvironmentOrderProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function jobQueue(jobQueueProps: JobQueue): JobQueue { return ({ ...jobQueueProps, _logicalType: '' }) }
  
export interface JobQueue extends KloudResource {
  computeEnvironmentOrder: ComputeEnvironmentOrderProps[]
  priority: Value<number>
  state?: Value<string>
  jobQueueName?: Value<string>
}