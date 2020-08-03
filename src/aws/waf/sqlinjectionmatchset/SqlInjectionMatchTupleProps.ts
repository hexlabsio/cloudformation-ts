import { FieldToMatchProps } from './FieldToMatchProps';
import { Value } from '../../../kloudformation/Value';

export interface SqlInjectionMatchTupleProps {
  fieldToMatch: FieldToMatchProps
  textTransformation: Value<string>
}