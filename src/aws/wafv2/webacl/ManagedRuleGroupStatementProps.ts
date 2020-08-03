import { Value } from '../../../kloudformation/Value';
import { ExcludedRuleProps } from './ExcludedRuleProps';

export interface ManagedRuleGroupStatementProps {
  name: Value<string>
  vendorName: Value<string>
  excludedRules?: ExcludedRuleProps[]
}