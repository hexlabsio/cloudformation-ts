import { Value } from '../../../kloudformation/Value';
import { FieldToMatchProps } from '../../wafregional/sizeconstraintset/FieldToMatchProps';

export function sizeConstraintProps(sizeConstraintPropsProps: SizeConstraintProps): SizeConstraintProps { return (sizeConstraintPropsProps) }

export interface SizeConstraintProps {
    comparisonOperator: Value<string>;
    fieldToMatch: FieldToMatchProps;
    size: Value<number>;
    textTransformation: Value<string>;
}