import { FieldToMatchProps } from './FieldToMatchProps';
import { TextTransformationProps } from './TextTransformationProps';

export function sqliMatchStatementProps(sqliMatchStatementPropsProps: SqliMatchStatementProps): SqliMatchStatementProps { return (sqliMatchStatementPropsProps) }

export interface SqliMatchStatementProps {
    fieldToMatch: FieldToMatchProps;
    textTransformations: TextTransformationProps[];
}