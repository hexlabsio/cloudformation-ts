import { Value } from '../../../kloudformation/Value';
import { FieldToMatchProps } from './FieldToMatchProps';
import { TextTransformationProps } from './TextTransformationProps';

export interface RegexPatternSetReferenceStatementProps {
  arn: Value<string>
  fieldToMatch: FieldToMatchProps
  textTransformations: TextTransformationProps[]
}