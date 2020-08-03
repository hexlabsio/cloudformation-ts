import { Value } from '../../kloudformation/Value';
import { ScheduledActionProps } from './scalableTarget/ScheduledActionProps';
import { SuspendedStateProps } from './scalableTarget/SuspendedStateProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function scalableTarget(scalableTargetProps: ScalableTarget): ScalableTarget { return ({ ...scalableTargetProps, _logicalType: '' }) }
  
export interface ScalableTarget extends KloudResource {
  maxCapacity: Value<number>
  minCapacity: Value<number>
  resourceId: Value<string>
  roleARN: Value<string>
  scalableDimension: Value<string>
  scheduledActions?: ScheduledActionProps[]
  serviceNamespace: Value<string>
  suspendedState?: SuspendedStateProps
}