import { Value } from '../../../kloudformation/Value';

export function resetTimerProps(resetTimerPropsProps: ResetTimerProps): ResetTimerProps { return (resetTimerPropsProps) }

export interface ResetTimerProps {
    timerName?: Value<string>;
}