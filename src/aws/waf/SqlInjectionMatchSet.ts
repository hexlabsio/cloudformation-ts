import { Value } from '../../kloudformation/Value';
import { SqlInjectionMatchTupleProps } from '../wafregional/sqlinjectionmatchset/SqlInjectionMatchTupleProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type SqlInjectionMatchSetAttributes = {  }
export function sqlInjectionMatchSet(sqlInjectionMatchSetProps: SqlInjectionMatchSet): SqlInjectionMatchSet & { attributes: SqlInjectionMatchSetAttributes } { return ({ ...sqlInjectionMatchSetProps, _logicalType: 'AWS::WAF::SqlInjectionMatchSet', attributes: {  } }) }

export interface SqlInjectionMatchSet extends KloudResource {
    name: Value<string>;
    sqlInjectionMatchTuples?: SqlInjectionMatchTupleProps[];
}