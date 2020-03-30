import { Value } from '../../../kloudformation/Value';
import { ExcludedRuleProps } from './ExcludedRuleProps';

export function ruleGroupReferenceStatementProps(ruleGroupReferenceStatementPropsProps: RuleGroupReferenceStatementProps): RuleGroupReferenceStatementProps { return (ruleGroupReferenceStatementPropsProps) as unknown as RuleGroupReferenceStatementProps }

export interface RuleGroupReferenceStatementProps {
    arn: Value<string>;
    excludedRules?: ExcludedRuleProps[];
}