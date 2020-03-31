import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type ScheduledActionAttributes = {  }
export function scheduledAction(scheduledActionProps: ScheduledAction): ScheduledAction & { attributes: ScheduledActionAttributes } { return ({ ...scheduledActionProps, _logicalType: 'AWS::AutoScaling::ScheduledAction', attributes: {  } }) }

export interface ScheduledAction extends KloudResource {
    autoScalingGroupName: Value<string>;
    desiredCapacity?: Value<number>;
    endTime?: Value<string>;
    maxSize?: Value<number>;
    minSize?: Value<number>;
    recurrence?: Value<string>;
    startTime?: Value<string>;
}