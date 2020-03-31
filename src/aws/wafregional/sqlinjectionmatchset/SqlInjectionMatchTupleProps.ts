import { Value } from '../../../kloudformation/Value';
import { FieldToMatchProps } from './FieldToMatchProps';

export function sqlInjectionMatchTupleProps(sqlInjectionMatchTuplePropsProps: SqlInjectionMatchTupleProps): SqlInjectionMatchTupleProps { return (sqlInjectionMatchTuplePropsProps) }

export interface SqlInjectionMatchTupleProps {
    textTransformation: Value<string>;
    fieldToMatch: FieldToMatchProps;
}