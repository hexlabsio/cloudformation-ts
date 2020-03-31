import { Value } from '../../../kloudformation/Value';
import { FieldToMatchProps } from './FieldToMatchProps';

export function xssMatchTupleProps(xssMatchTuplePropsProps: XssMatchTupleProps): XssMatchTupleProps { return (xssMatchTuplePropsProps) }

export interface XssMatchTupleProps {
    textTransformation: Value<string>;
    fieldToMatch: FieldToMatchProps;
}