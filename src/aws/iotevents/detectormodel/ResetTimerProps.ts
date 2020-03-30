import { Value } from '../../../kloudformation/Value';

export function resetTimerProps(resetTimerPropsProps: ResetTimerProps): ResetTimerProps { return (resetTimerPropsProps) as unknown as ResetTimerProps }

export interface ResetTimerProps {
    timerName?: Value<string>;
}