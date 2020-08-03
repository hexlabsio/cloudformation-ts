import { Value } from '../../kloudformation/Value';
import { TargetProps } from './maintenanceWindowTask/TargetProps';
import { TaskInvocationParametersProps } from './maintenanceWindowTask/TaskInvocationParametersProps';
import { LoggingInfoProps } from './maintenanceWindowTask/LoggingInfoProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function maintenanceWindowTask(maintenanceWindowTaskProps: MaintenanceWindowTask): MaintenanceWindowTask { return ({ ...maintenanceWindowTaskProps, _logicalType: '' }) }
  
export interface MaintenanceWindowTask extends KloudResource {
  maxErrors: Value<string>
  description?: Value<string>
  serviceRoleArn?: Value<string>
  priority: Value<number>
  maxConcurrency: Value<string>
  targets: TargetProps[]
  name?: Value<string>
  taskArn: Value<string>
  taskInvocationParameters?: TaskInvocationParametersProps
  windowId: Value<string>
  taskParameters?: Value<any>
  taskType: Value<string>
  loggingInfo?: LoggingInfoProps
}