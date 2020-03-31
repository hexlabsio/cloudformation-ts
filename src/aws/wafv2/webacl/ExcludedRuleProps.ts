import { Value } from '../../../kloudformation/Value';

export function excludedRuleProps(excludedRulePropsProps: ExcludedRuleProps): ExcludedRuleProps { return (excludedRulePropsProps) }

export interface ExcludedRuleProps {
    name: Value<string>;
}