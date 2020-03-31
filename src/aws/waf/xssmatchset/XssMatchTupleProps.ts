import { FieldToMatchProps } from '../../wafregional/xssmatchset/FieldToMatchProps';
import { Value } from '../../../kloudformation/Value';

export function xssMatchTupleProps(xssMatchTuplePropsProps: XssMatchTupleProps): XssMatchTupleProps { return (xssMatchTuplePropsProps) }

export interface XssMatchTupleProps {
    fieldToMatch: FieldToMatchProps;
    textTransformation: Value<string>;
}