import { SqlInjectionMatchTupleProps } from './sqlInjectionMatchSet/SqlInjectionMatchTupleProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function sqlInjectionMatchSet(sqlInjectionMatchSetProps: SqlInjectionMatchSet): SqlInjectionMatchSet { return ({ ...sqlInjectionMatchSetProps, _logicalType: '' }) }
  
export interface SqlInjectionMatchSet extends KloudResource {
  sqlInjectionMatchTuples?: SqlInjectionMatchTupleProps[]
  name: Value<string>
}