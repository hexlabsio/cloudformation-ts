import { Value } from '../../../kloudformation/Value';
import { FieldToMatchProps } from './FieldToMatchProps';

export interface SqlInjectionMatchTupleProps {
  textTransformation: Value<string>
  fieldToMatch: FieldToMatchProps
}