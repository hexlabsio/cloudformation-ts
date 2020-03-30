import { ComputeEnvironmentOrderProps } from './jobqueue/ComputeEnvironmentOrderProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function jobQueue(jobQueueProps: JobQueue & { logicalName?: string }): JobQueue { return ({ ...jobQueueProps, _logicalType: 'AWS::Batch::JobQueue' }) as unknown as JobQueue }

export interface JobQueue extends KloudResource {
    computeEnvironmentOrder: ComputeEnvironmentOrderProps[];
    priority: Value<number>;
    state?: Value<string>;
    jobQueueName?: Value<string>;
}