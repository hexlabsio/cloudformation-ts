import { ByteMatchStatementProps } from './ByteMatchStatementProps';
import { SqliMatchStatementProps } from './SqliMatchStatementProps';
import { XssMatchStatementProps } from './XssMatchStatementProps';
import { SizeConstraintStatementProps } from './SizeConstraintStatementProps';
import { GeoMatchStatementProps } from './GeoMatchStatementProps';
import { RuleGroupReferenceStatementProps } from './RuleGroupReferenceStatementProps';
import { IPSetReferenceStatementProps } from './IPSetReferenceStatementProps';
import { RegexPatternSetReferenceStatementProps } from './RegexPatternSetReferenceStatementProps';
import { ManagedRuleGroupStatementProps } from './ManagedRuleGroupStatementProps';
import { RateBasedStatementOneProps } from './RateBasedStatementOneProps';
import { AndStatementOneProps } from './AndStatementOneProps';
import { OrStatementOneProps } from './OrStatementOneProps';
import { NotStatementOneProps } from './NotStatementOneProps';

export function statementOneProps(statementOnePropsProps: StatementOneProps): StatementOneProps { return (statementOnePropsProps) }

export interface StatementOneProps {
    byteMatchStatement?: ByteMatchStatementProps;
    sqliMatchStatement?: SqliMatchStatementProps;
    xssMatchStatement?: XssMatchStatementProps;
    sizeConstraintStatement?: SizeConstraintStatementProps;
    geoMatchStatement?: GeoMatchStatementProps;
    ruleGroupReferenceStatement?: RuleGroupReferenceStatementProps;
    iPSetReferenceStatement?: IPSetReferenceStatementProps;
    regexPatternSetReferenceStatement?: RegexPatternSetReferenceStatementProps;
    managedRuleGroupStatement?: ManagedRuleGroupStatementProps;
    rateBasedStatement?: RateBasedStatementOneProps;
    andStatement?: AndStatementOneProps;
    orStatement?: OrStatementOneProps;
    notStatement?: NotStatementOneProps;
}