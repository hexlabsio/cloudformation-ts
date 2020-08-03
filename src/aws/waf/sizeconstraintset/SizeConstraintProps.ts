import { Value } from '../../../kloudformation/Value';
import { FieldToMatchProps } from './FieldToMatchProps';

export interface SizeConstraintProps {
  comparisonOperator: Value<string>
  fieldToMatch: FieldToMatchProps
  size: Value<number>
  textTransformation: Value<string>
}