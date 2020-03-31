import { Value } from '../../../kloudformation/Value';
import { ConditionProps } from './ConditionProps';

export function predicateProps(predicatePropsProps: PredicateProps): PredicateProps { return (predicatePropsProps) }

export interface PredicateProps {
    logical?: Value<string>;
    conditions?: ConditionProps[];
}