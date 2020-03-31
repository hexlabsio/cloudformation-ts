import { Value } from '../../../kloudformation/Value';

export function matcherProps(matcherPropsProps: MatcherProps): MatcherProps { return (matcherPropsProps) }

export interface MatcherProps {
    httpCode: Value<string>;
}