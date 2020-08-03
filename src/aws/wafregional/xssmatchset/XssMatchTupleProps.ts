import { Value } from '../../../kloudformation/Value';
import { FieldToMatchProps } from './FieldToMatchProps';

export interface XssMatchTupleProps {
  textTransformation: Value<string>
  fieldToMatch: FieldToMatchProps
}