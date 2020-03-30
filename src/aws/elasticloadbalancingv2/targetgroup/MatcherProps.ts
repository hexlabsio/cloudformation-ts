import { Value } from '../../../kloudformation/Value';

export function matcherProps(matcherPropsProps: MatcherProps): MatcherProps { return (matcherPropsProps) as unknown as MatcherProps }

export interface MatcherProps {
    httpCode: Value<string>;
}