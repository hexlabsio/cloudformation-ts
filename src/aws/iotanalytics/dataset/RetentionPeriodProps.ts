import { Value } from '../../../kloudformation/Value';

export interface RetentionPeriodProps {
  numberOfDays: Value<number>
  unlimited: Value<boolean>
}