import { Value } from '../../../kloudformation/Value';
import { FieldToMatchProps } from './FieldToMatchProps';
import { TextTransformationProps } from './TextTransformationProps';

export function byteMatchStatementProps(byteMatchStatementPropsProps: ByteMatchStatementProps): ByteMatchStatementProps { return (byteMatchStatementPropsProps) }

export interface ByteMatchStatementProps {
    searchString: Value<string>;
    fieldToMatch: FieldToMatchProps;
    textTransformations: TextTransformationProps[];
    positionalConstraint: Value<string>;
    searchStringBase64?: Value<string>;
}