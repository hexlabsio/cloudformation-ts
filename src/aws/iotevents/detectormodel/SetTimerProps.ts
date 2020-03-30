import { Value } from '../../../kloudformation/Value';

export function setTimerProps(setTimerPropsProps: SetTimerProps): SetTimerProps { return (setTimerPropsProps) as unknown as SetTimerProps }

export interface SetTimerProps {
    seconds?: Value<number>;
    timerName?: Value<string>;
}