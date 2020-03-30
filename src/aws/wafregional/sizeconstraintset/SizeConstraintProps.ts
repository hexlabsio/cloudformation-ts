import { Value } from '../../../kloudformation/Value';
import { FieldToMatchProps } from './FieldToMatchProps';

export function sizeConstraintProps(sizeConstraintPropsProps: SizeConstraintProps): SizeConstraintProps { return (sizeConstraintPropsProps) as unknown as SizeConstraintProps }

export interface SizeConstraintProps {
    comparisonOperator: Value<string>;
    size: Value<number>;
    textTransformation: Value<string>;
    fieldToMatch: FieldToMatchProps;
}