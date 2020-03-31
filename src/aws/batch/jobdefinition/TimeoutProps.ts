import { Value } from '../../../kloudformation/Value';

export function timeoutProps(timeoutPropsProps: TimeoutProps): TimeoutProps { return (timeoutPropsProps) }

export interface TimeoutProps {
    attemptDurationSeconds?: Value<number>;
}