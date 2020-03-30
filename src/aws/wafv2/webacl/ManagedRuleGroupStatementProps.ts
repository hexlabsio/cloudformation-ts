import { Value } from '../../../kloudformation/Value';
import { ExcludedRuleProps } from './ExcludedRuleProps';

export function managedRuleGroupStatementProps(managedRuleGroupStatementPropsProps: ManagedRuleGroupStatementProps): ManagedRuleGroupStatementProps { return (managedRuleGroupStatementPropsProps) as unknown as ManagedRuleGroupStatementProps }

export interface ManagedRuleGroupStatementProps {
    name: Value<string>;
    vendorName: Value<string>;
    excludedRules?: ExcludedRuleProps[];
}