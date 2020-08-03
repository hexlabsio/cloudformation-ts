import { FieldToMatchProps } from './FieldToMatchProps';
import { Value } from '../../../kloudformation/Value';

export interface XssMatchTupleProps {
  fieldToMatch: FieldToMatchProps
  textTransformation: Value<string>
}