import { FieldToMatchProps } from './FieldToMatchProps';
import { TextTransformationProps } from './TextTransformationProps';

export interface XssMatchStatementProps {
  fieldToMatch: FieldToMatchProps
  textTransformations: TextTransformationProps[]
}