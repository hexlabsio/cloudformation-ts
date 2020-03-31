import { RuleProps } from './RuleProps';

export function ruleGroupProps(ruleGroupPropsProps: RuleGroupProps): RuleGroupProps { return (ruleGroupPropsProps) }

export interface RuleGroupProps {
    patchRules?: RuleProps[];
}