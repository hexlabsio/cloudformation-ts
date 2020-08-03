import { ConnectionsListProps } from './job/ConnectionsListProps';
import { Value } from '../../kloudformation/Value';
import { NotificationPropertyProps } from './job/NotificationPropertyProps';
import { JobCommandProps } from './job/JobCommandProps';
import { ExecutionPropertyProps } from './job/ExecutionPropertyProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function job(jobProps: Job): Job { return ({ ...jobProps, _logicalType: '' }) }
  
export interface Job extends KloudResource {
  connections?: ConnectionsListProps
  maxRetries?: Value<number>
  description?: Value<string>
  timeout?: Value<number>
  allocatedCapacity?: Value<number>
  name?: Value<string>
  role: Value<string>
  defaultArguments?: Value<any>
  notificationProperty?: NotificationPropertyProps
  workerType?: Value<string>
  logUri?: Value<string>
  command: JobCommandProps
  glueVersion?: Value<string>
  executionProperty?: ExecutionPropertyProps
  securityConfiguration?: Value<string>
  numberOfWorkers?: Value<number>
  tags?: Value<any>
  maxCapacity?: Value<number>
}