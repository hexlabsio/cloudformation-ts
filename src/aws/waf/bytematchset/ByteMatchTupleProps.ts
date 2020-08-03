import { FieldToMatchProps } from './FieldToMatchProps';
import { Value } from '../../../kloudformation/Value';

export interface ByteMatchTupleProps {
  fieldToMatch: FieldToMatchProps
  positionalConstraint: Value<string>
  targetString?: Value<string>
  targetStringBase64?: Value<string>
  textTransformation: Value<string>
}