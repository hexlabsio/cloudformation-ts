import { RuleProps } from './RuleProps';

export function ruleGroupProps(ruleGroupPropsProps: RuleGroupProps): RuleGroupProps { return (ruleGroupPropsProps) as unknown as RuleGroupProps }

export interface RuleGroupProps {
    patchRules?: RuleProps[];
}