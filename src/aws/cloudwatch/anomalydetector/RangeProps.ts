import { Value } from '../../../kloudformation/Value';

export function rangeProps(rangePropsProps: RangeProps): RangeProps { return (rangePropsProps) as unknown as RangeProps }

export interface RangeProps {
    endTime: Value<string>;
    startTime: Value<string>;
}