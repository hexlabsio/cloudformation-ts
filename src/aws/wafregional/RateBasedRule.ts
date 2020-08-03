import { Value } from '../../kloudformation/Value';
import { PredicateProps } from './rateBasedRule/PredicateProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function rateBasedRule(rateBasedRuleProps: RateBasedRule): RateBasedRule { return ({ ...rateBasedRuleProps, _logicalType: '' }) }
  
export interface RateBasedRule extends KloudResource {
  metricName: Value<string>
  rateLimit: Value<number>
  matchPredicates?: PredicateProps[]
  rateKey: Value<string>
  name: Value<string>
}