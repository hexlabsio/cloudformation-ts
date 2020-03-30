import { Value } from '../../../kloudformation/Value';

export function scheduleProps(schedulePropsProps: ScheduleProps): ScheduleProps { return (schedulePropsProps) as unknown as ScheduleProps }

export interface ScheduleProps {
    scheduleExpression: Value<string>;
}