import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function scheduledAction(scheduledActionProps: ScheduledAction & { logicalName?: string }): ScheduledAction { return ({ ...scheduledActionProps, _logicalType: 'AWS::AutoScaling::ScheduledAction' }) as unknown as ScheduledAction }

export interface ScheduledAction extends KloudResource {
    autoScalingGroupName: Value<string>;
    desiredCapacity?: Value<number>;
    endTime?: Value<string>;
    maxSize?: Value<number>;
    minSize?: Value<number>;
    recurrence?: Value<string>;
    startTime?: Value<string>;
}