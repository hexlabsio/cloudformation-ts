import { Value } from '../../kloudformation/Value';
import { PredicateProps } from '../wafregional/rule/PredicateProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type RuleAttributes = {  }
export function rule(ruleProps: Rule): Rule & { attributes: RuleAttributes } { return ({ ...ruleProps, _logicalType: 'AWS::WAF::Rule', attributes: {  } }) }

export interface Rule extends KloudResource {
    metricName: Value<string>;
    name: Value<string>;
    predicates?: PredicateProps[];
}