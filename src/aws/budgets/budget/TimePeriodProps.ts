import { Value } from '../../../kloudformation/Value';

export function timePeriodProps(timePeriodPropsProps: TimePeriodProps): TimePeriodProps { return (timePeriodPropsProps) }

export interface TimePeriodProps {
    start?: Value<string>;
    end?: Value<string>;
}