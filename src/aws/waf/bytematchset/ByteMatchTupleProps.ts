import { FieldToMatchProps } from '../../wafregional/bytematchset/FieldToMatchProps';
import { Value } from '../../../kloudformation/Value';

export function byteMatchTupleProps(byteMatchTuplePropsProps: ByteMatchTupleProps): ByteMatchTupleProps { return (byteMatchTuplePropsProps) }

export interface ByteMatchTupleProps {
    fieldToMatch: FieldToMatchProps;
    positionalConstraint: Value<string>;
    textTransformation: Value<string>;
    targetString?: Value<string>;
    targetStringBase64?: Value<string>;
}