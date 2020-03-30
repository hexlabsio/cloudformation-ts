import { Value } from '../../../kloudformation/Value';

export function clearTimerProps(clearTimerPropsProps: ClearTimerProps): ClearTimerProps { return (clearTimerPropsProps) as unknown as ClearTimerProps }

export interface ClearTimerProps {
    timerName?: Value<string>;
}