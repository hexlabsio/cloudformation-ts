import { Value } from '../../kloudformation/Value';
import { SqlInjectionMatchTupleProps } from './sqlinjectionmatchset/SqlInjectionMatchTupleProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type SqlInjectionMatchSetAttributes = {  }
export function sqlInjectionMatchSet(sqlInjectionMatchSetProps: SqlInjectionMatchSet): SqlInjectionMatchSet & { attributes: SqlInjectionMatchSetAttributes } { return ({ ...sqlInjectionMatchSetProps, _logicalType: 'AWS::WAFRegional::SqlInjectionMatchSet', attributes: {  } }) }

export interface SqlInjectionMatchSet extends KloudResource {
    name: Value<string>;
    sqlInjectionMatchTuples?: SqlInjectionMatchTupleProps[];
}