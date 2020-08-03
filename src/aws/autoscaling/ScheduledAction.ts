import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function scheduledAction(scheduledActionProps: ScheduledAction): ScheduledAction { return ({ ...scheduledActionProps, _logicalType: '' }) }
  
export interface ScheduledAction extends KloudResource {
  autoScalingGroupName: Value<string>
  desiredCapacity?: Value<number>
  endTime?: Value<string>
  maxSize?: Value<number>
  minSize?: Value<number>
  recurrence?: Value<string>
  startTime?: Value<string>
}