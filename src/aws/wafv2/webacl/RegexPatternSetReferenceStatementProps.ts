import { Value } from '../../../kloudformation/Value';
import { FieldToMatchProps } from './FieldToMatchProps';
import { TextTransformationProps } from './TextTransformationProps';

export function regexPatternSetReferenceStatementProps(regexPatternSetReferenceStatementPropsProps: RegexPatternSetReferenceStatementProps): RegexPatternSetReferenceStatementProps { return (regexPatternSetReferenceStatementPropsProps) }

export interface RegexPatternSetReferenceStatementProps {
    arn: Value<string>;
    fieldToMatch: FieldToMatchProps;
    textTransformations: TextTransformationProps[];
}