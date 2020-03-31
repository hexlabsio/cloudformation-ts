import { Value } from '../../../kloudformation/Value';

export function clearTimerProps(clearTimerPropsProps: ClearTimerProps): ClearTimerProps { return (clearTimerPropsProps) }

export interface ClearTimerProps {
    timerName?: Value<string>;
}