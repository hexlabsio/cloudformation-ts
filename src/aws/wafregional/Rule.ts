import { Value } from '../../kloudformation/Value';
import { PredicateProps } from './rule/PredicateProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function rule(ruleProps: Rule & { logicalName?: string }): Rule { return ({ ...ruleProps, _logicalType: 'AWS::WAFRegional::Rule' }) as unknown as Rule }

export interface Rule extends KloudResource {
    metricName: Value<string>;
    name: Value<string>;
    predicates?: PredicateProps[];
}