import { Value } from '../../../kloudformation/Value';

export function predicateProps(predicatePropsProps: PredicateProps): PredicateProps { return (predicatePropsProps) }

export interface PredicateProps {
    dataId: Value<string>;
    negated: Value<boolean>;
    type: Value<string>;
}