import { Value } from '../../../kloudformation/Value';

export interface ScheduleProps {
  expression: Value<string>
  durationInSeconds?: Value<string>
}