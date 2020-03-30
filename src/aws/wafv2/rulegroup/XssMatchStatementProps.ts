import { FieldToMatchProps } from './FieldToMatchProps';
import { TextTransformationProps } from './TextTransformationProps';

export function xssMatchStatementProps(xssMatchStatementPropsProps: XssMatchStatementProps): XssMatchStatementProps { return (xssMatchStatementPropsProps) as unknown as XssMatchStatementProps }

export interface XssMatchStatementProps {
    fieldToMatch: FieldToMatchProps;
    textTransformations: TextTransformationProps[];
}