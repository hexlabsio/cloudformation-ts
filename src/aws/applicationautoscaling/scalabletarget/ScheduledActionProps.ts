import { Value } from '../../../kloudformation/Value';
import { ScalableTargetActionProps } from './ScalableTargetActionProps';

export function scheduledActionProps(scheduledActionPropsProps: ScheduledActionProps): ScheduledActionProps { return (scheduledActionPropsProps) }

export interface ScheduledActionProps {
    schedule: Value<string>;
    scheduledActionName: Value<string>;
    endTime?: Value<java.time.Instant>;
    scalableTargetAction?: ScalableTargetActionProps;
    startTime?: Value<java.time.Instant>;
}