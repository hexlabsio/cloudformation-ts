import { Value } from '../../../kloudformation/Value';

export function predicateProps(predicatePropsProps: PredicateProps): PredicateProps { return (predicatePropsProps) }

export interface PredicateProps {
    type: Value<string>;
    dataId: Value<string>;
    negated: Value<boolean>;
}