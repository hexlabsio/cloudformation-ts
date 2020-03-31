import { Value } from '../../kloudformation/Value';
import { PredicateProps } from './ratebasedrule/PredicateProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type RateBasedRuleAttributes = {  }
export function rateBasedRule(rateBasedRuleProps: RateBasedRule): RateBasedRule & { attributes: RateBasedRuleAttributes } { return ({ ...rateBasedRuleProps, _logicalType: 'AWS::WAFRegional::RateBasedRule', attributes: {  } }) }

export interface RateBasedRule extends KloudResource {
    metricName: Value<string>;
    rateLimit: Value<number>;
    rateKey: Value<string>;
    name: Value<string>;
    matchPredicates?: PredicateProps[];
}