import { Value } from '../../../kloudformation/Value';

export interface SetTimerProps {
  seconds?: Value<number>
  timerName?: Value<string>
  durationExpression?: Value<string>
}