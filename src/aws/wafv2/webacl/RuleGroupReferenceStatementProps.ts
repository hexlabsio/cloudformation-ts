import { Value } from '../../../kloudformation/Value';
import { ExcludedRuleProps } from './ExcludedRuleProps';

export interface RuleGroupReferenceStatementProps {
  arn: Value<string>
  excludedRules?: ExcludedRuleProps[]
}