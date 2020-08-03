import { FieldToMatchProps } from './FieldToMatchProps';
import { Value } from '../../../kloudformation/Value';
import { TextTransformationProps } from './TextTransformationProps';

export interface SizeConstraintStatementProps {
  fieldToMatch: FieldToMatchProps
  comparisonOperator: Value<string>
  size: Value<number>
  textTransformations: TextTransformationProps[]
}