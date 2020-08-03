import { Value } from '../../kloudformation/Value';
import { PredicateProps } from './rule/PredicateProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function rule(ruleProps: Rule): Rule { return ({ ...ruleProps, _logicalType: '' }) }
  
export interface Rule extends KloudResource {
  metricName: Value<string>
  predicates?: PredicateProps[]
  name: Value<string>
}