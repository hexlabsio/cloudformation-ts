import { Value } from '../../../kloudformation/Value';
import { FieldToMatchProps } from './FieldToMatchProps';
import { TextTransformationProps } from './TextTransformationProps';

export interface ByteMatchStatementProps {
  searchString?: Value<string>
  searchStringBase64?: Value<string>
  fieldToMatch: FieldToMatchProps
  textTransformations: TextTransformationProps[]
  positionalConstraint: Value<string>
}