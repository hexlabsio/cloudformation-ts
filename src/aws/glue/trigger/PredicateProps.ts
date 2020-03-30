import { Value } from '../../../kloudformation/Value';
import { ConditionProps } from './ConditionProps';

export function predicateProps(predicatePropsProps: PredicateProps): PredicateProps { return (predicatePropsProps) as unknown as PredicateProps }

export interface PredicateProps {
    logical?: Value<string>;
    conditions?: ConditionProps[];
}