import { ComputeEnvironmentOrderProps } from './jobqueue/ComputeEnvironmentOrderProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type JobQueueAttributes = {  }
export function jobQueue(jobQueueProps: JobQueue): JobQueue & { attributes: JobQueueAttributes } { return ({ ...jobQueueProps, _logicalType: 'AWS::Batch::JobQueue', attributes: {  } }) }

export interface JobQueue extends KloudResource {
    computeEnvironmentOrder: ComputeEnvironmentOrderProps[];
    priority: Value<number>;
    state?: Value<string>;
    jobQueueName?: Value<string>;
}