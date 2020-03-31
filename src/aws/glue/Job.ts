import { Value } from '../../kloudformation/Value';
import { JobCommandProps } from './job/JobCommandProps';
import { ConnectionsListProps } from './job/ConnectionsListProps';
import { NotificationPropertyProps } from './job/NotificationPropertyProps';
import { ExecutionPropertyProps } from './job/ExecutionPropertyProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type JobAttributes = {  }
export function job(jobProps: Job): Job & { attributes: JobAttributes } { return ({ ...jobProps, _logicalType: 'AWS::Glue::Job', attributes: {  } }) }

export interface Job extends KloudResource {
    role: Value<string>;
    command: JobCommandProps;
    connections?: ConnectionsListProps;
    maxRetries?: Value<number>;
    description?: Value<string>;
    timeout?: Value<number>;
    allocatedCapacity?: Value<number>;
    name?: Value<string>;
    defaultArguments?: Value<any>;
    notificationProperty?: NotificationPropertyProps;
    workerType?: Value<string>;
    logUri?: Value<string>;
    glueVersion?: Value<string>;
    executionProperty?: ExecutionPropertyProps;
    securityConfiguration?: Value<string>;
    numberOfWorkers?: Value<number>;
    tags?: Value<any>;
    maxCapacity?: Value<number>;
}