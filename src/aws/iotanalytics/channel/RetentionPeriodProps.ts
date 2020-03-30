import { Value } from '../../../kloudformation/Value';

export function retentionPeriodProps(retentionPeriodPropsProps: RetentionPeriodProps): RetentionPeriodProps { return (retentionPeriodPropsProps) as unknown as RetentionPeriodProps }

export interface RetentionPeriodProps {
    numberOfDays?: Value<number>;
    unlimited?: Value<boolean>;
}