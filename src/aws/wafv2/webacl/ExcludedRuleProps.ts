import { Value } from '../../../kloudformation/Value';

export function excludedRuleProps(excludedRulePropsProps: ExcludedRuleProps): ExcludedRuleProps { return (excludedRulePropsProps) as unknown as ExcludedRuleProps }

export interface ExcludedRuleProps {
    name: Value<string>;
}