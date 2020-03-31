import { Value } from '../../../kloudformation/Value';

export function retentionPeriodProps(retentionPeriodPropsProps: RetentionPeriodProps): RetentionPeriodProps { return (retentionPeriodPropsProps) }

export interface RetentionPeriodProps {
    numberOfDays?: Value<number>;
    unlimited?: Value<boolean>;
}