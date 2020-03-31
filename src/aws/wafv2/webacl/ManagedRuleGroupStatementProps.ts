import { Value } from '../../../kloudformation/Value';
import { ExcludedRuleProps } from './ExcludedRuleProps';

export function managedRuleGroupStatementProps(managedRuleGroupStatementPropsProps: ManagedRuleGroupStatementProps): ManagedRuleGroupStatementProps { return (managedRuleGroupStatementPropsProps) }

export interface ManagedRuleGroupStatementProps {
    name: Value<string>;
    vendorName: Value<string>;
    excludedRules?: ExcludedRuleProps[];
}