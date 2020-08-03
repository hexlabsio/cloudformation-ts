import { FieldToMatchProps } from './FieldToMatchProps';
import { TextTransformationProps } from './TextTransformationProps';

export interface SqliMatchStatementProps {
  fieldToMatch: FieldToMatchProps
  textTransformations: TextTransformationProps[]
}