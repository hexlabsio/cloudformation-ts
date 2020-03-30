import { Value } from '../../../kloudformation/Value';

export function timePeriodProps(timePeriodPropsProps: TimePeriodProps): TimePeriodProps { return (timePeriodPropsProps) as unknown as TimePeriodProps }

export interface TimePeriodProps {
    start?: Value<string>;
    end?: Value<string>;
}