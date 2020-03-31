import { FieldToMatchProps } from '../../wafregional/sqlinjectionmatchset/FieldToMatchProps';
import { Value } from '../../../kloudformation/Value';

export function sqlInjectionMatchTupleProps(sqlInjectionMatchTuplePropsProps: SqlInjectionMatchTupleProps): SqlInjectionMatchTupleProps { return (sqlInjectionMatchTuplePropsProps) }

export interface SqlInjectionMatchTupleProps {
    fieldToMatch: FieldToMatchProps;
    textTransformation: Value<string>;
}