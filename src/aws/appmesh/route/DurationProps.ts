import { Value } from '../../../kloudformation/Value';

export function durationProps(durationPropsProps: DurationProps): DurationProps { return (durationPropsProps) }

export interface DurationProps {
    value: Value<number>;
    unit: Value<string>;
}