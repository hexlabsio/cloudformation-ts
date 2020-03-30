import { ByteMatchStatementProps } from './ByteMatchStatementProps';
import { SqliMatchStatementProps } from './SqliMatchStatementProps';
import { XssMatchStatementProps } from './XssMatchStatementProps';
import { SizeConstraintStatementProps } from './SizeConstraintStatementProps';
import { GeoMatchStatementProps } from './GeoMatchStatementProps';
import { IPSetReferenceStatementProps } from './IPSetReferenceStatementProps';
import { RegexPatternSetReferenceStatementProps } from './RegexPatternSetReferenceStatementProps';

export function statementThreeProps(statementThreePropsProps: StatementThreeProps): StatementThreeProps { return (statementThreePropsProps) as unknown as StatementThreeProps }

export interface StatementThreeProps {
    byteMatchStatement?: ByteMatchStatementProps;
    sqliMatchStatement?: SqliMatchStatementProps;
    xssMatchStatement?: XssMatchStatementProps;
    sizeConstraintStatement?: SizeConstraintStatementProps;
    geoMatchStatement?: GeoMatchStatementProps;
    iPSetReferenceStatement?: IPSetReferenceStatementProps;
    regexPatternSetReferenceStatement?: RegexPatternSetReferenceStatementProps;
}