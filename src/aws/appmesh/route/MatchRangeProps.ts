import { Value } from '../../../kloudformation/Value';

export function matchRangeProps(matchRangePropsProps: MatchRangeProps): MatchRangeProps { return (matchRangePropsProps) as unknown as MatchRangeProps }

export interface MatchRangeProps {
    start: Value<number>;
    end: Value<number>;
}