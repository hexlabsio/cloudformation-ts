import { Value } from '../../../kloudformation/Value';

export function setTimerProps(setTimerPropsProps: SetTimerProps): SetTimerProps { return (setTimerPropsProps) }

export interface SetTimerProps {
    seconds?: Value<number>;
    timerName?: Value<string>;
}