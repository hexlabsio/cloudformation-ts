import { Value } from '../../kloudformation/Value';
import { PredicateProps } from './ratebasedrule/PredicateProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function rateBasedRule(rateBasedRuleProps: RateBasedRule & { logicalName?: string }): RateBasedRule { return ({ ...rateBasedRuleProps, _logicalType: 'AWS::WAFRegional::RateBasedRule' }) as unknown as RateBasedRule }

export interface RateBasedRule extends KloudResource {
    metricName: Value<string>;
    rateLimit: Value<number>;
    rateKey: Value<string>;
    name: Value<string>;
    matchPredicates?: PredicateProps[];
}