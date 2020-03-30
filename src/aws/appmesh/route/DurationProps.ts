import { Value } from '../../../kloudformation/Value';

export function durationProps(durationPropsProps: DurationProps): DurationProps { return (durationPropsProps) as unknown as DurationProps }

export interface DurationProps {
    value: Value<number>;
    unit: Value<string>;
}