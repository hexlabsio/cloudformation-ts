import { Value } from '../../../kloudformation/Value';
import { FieldToMatchProps } from './FieldToMatchProps';

export interface ByteMatchTupleProps {
  targetString?: Value<string>
  targetStringBase64?: Value<string>
  positionalConstraint: Value<string>
  textTransformation: Value<string>
  fieldToMatch: FieldToMatchProps
}