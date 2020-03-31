import { ByteMatchStatementProps } from './ByteMatchStatementProps';
import { SqliMatchStatementProps } from './SqliMatchStatementProps';
import { XssMatchStatementProps } from './XssMatchStatementProps';
import { SizeConstraintStatementProps } from './SizeConstraintStatementProps';
import { GeoMatchStatementProps } from './GeoMatchStatementProps';
import { RuleGroupReferenceStatementProps } from './RuleGroupReferenceStatementProps';
import { IPSetReferenceStatementProps } from './IPSetReferenceStatementProps';
import { RegexPatternSetReferenceStatementProps } from './RegexPatternSetReferenceStatementProps';
import { ManagedRuleGroupStatementProps } from './ManagedRuleGroupStatementProps';

export function statementThreeProps(statementThreePropsProps: StatementThreeProps): StatementThreeProps { return (statementThreePropsProps) }

export interface StatementThreeProps {
    byteMatchStatement?: ByteMatchStatementProps;
    sqliMatchStatement?: SqliMatchStatementProps;
    xssMatchStatement?: XssMatchStatementProps;
    sizeConstraintStatement?: SizeConstraintStatementProps;
    geoMatchStatement?: GeoMatchStatementProps;
    ruleGroupReferenceStatement?: RuleGroupReferenceStatementProps;
    iPSetReferenceStatement?: IPSetReferenceStatementProps;
    regexPatternSetReferenceStatement?: RegexPatternSetReferenceStatementProps;
    managedRuleGroupStatement?: ManagedRuleGroupStatementProps;
}