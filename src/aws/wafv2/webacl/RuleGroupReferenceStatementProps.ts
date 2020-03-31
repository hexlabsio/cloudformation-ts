import { Value } from '../../../kloudformation/Value';
import { ExcludedRuleProps } from './ExcludedRuleProps';

export function ruleGroupReferenceStatementProps(ruleGroupReferenceStatementPropsProps: RuleGroupReferenceStatementProps): RuleGroupReferenceStatementProps { return (ruleGroupReferenceStatementPropsProps) }

export interface RuleGroupReferenceStatementProps {
    arn: Value<string>;
    excludedRules?: ExcludedRuleProps[];
}