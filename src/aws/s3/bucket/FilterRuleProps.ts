import { Value } from '../../../kloudformation/Value';

export function filterRuleProps(filterRulePropsProps: FilterRuleProps): FilterRuleProps { return (filterRulePropsProps) }

export interface FilterRuleProps {
    name: Value<string>;
    value: Value<string>;
}