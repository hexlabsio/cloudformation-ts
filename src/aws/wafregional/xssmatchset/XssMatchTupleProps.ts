import { Value } from '../../../kloudformation/Value';
import { FieldToMatchProps } from './FieldToMatchProps';

export function xssMatchTupleProps(xssMatchTuplePropsProps: XssMatchTupleProps): XssMatchTupleProps { return (xssMatchTuplePropsProps) as unknown as XssMatchTupleProps }

export interface XssMatchTupleProps {
    textTransformation: Value<string>;
    fieldToMatch: FieldToMatchProps;
}