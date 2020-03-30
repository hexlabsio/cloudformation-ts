import { Value } from '../../kloudformation/Value';
import { SqlInjectionMatchTupleProps } from './sqlinjectionmatchset/SqlInjectionMatchTupleProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function sqlInjectionMatchSet(sqlInjectionMatchSetProps: SqlInjectionMatchSet & { logicalName?: string }): SqlInjectionMatchSet { return ({ ...sqlInjectionMatchSetProps, _logicalType: 'AWS::WAFRegional::SqlInjectionMatchSet' }) as unknown as SqlInjectionMatchSet }

export interface SqlInjectionMatchSet extends KloudResource {
    name: Value<string>;
    sqlInjectionMatchTuples?: SqlInjectionMatchTupleProps[];
}