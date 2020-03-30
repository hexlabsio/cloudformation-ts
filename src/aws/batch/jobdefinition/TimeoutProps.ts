import { Value } from '../../../kloudformation/Value';

export function timeoutProps(timeoutPropsProps: TimeoutProps): TimeoutProps { return (timeoutPropsProps) as unknown as TimeoutProps }

export interface TimeoutProps {
    attemptDurationSeconds?: Value<number>;
}