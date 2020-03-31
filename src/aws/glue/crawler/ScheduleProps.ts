import { Value } from '../../../kloudformation/Value';

export function scheduleProps(schedulePropsProps: ScheduleProps): ScheduleProps { return (schedulePropsProps) }

export interface ScheduleProps {
    scheduleExpression?: Value<string>;
}