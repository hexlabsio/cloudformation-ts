import { Value } from '../../kloudformation/Value';
import { SqlInjectionMatchTupleProps } from './sqlInjectionMatchSet/SqlInjectionMatchTupleProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function sqlInjectionMatchSet(sqlInjectionMatchSetProps: SqlInjectionMatchSet): SqlInjectionMatchSet { return ({ ...sqlInjectionMatchSetProps, _logicalType: '' }) }
  
export interface SqlInjectionMatchSet extends KloudResource {
  name: Value<string>
  sqlInjectionMatchTuples?: SqlInjectionMatchTupleProps[]
}