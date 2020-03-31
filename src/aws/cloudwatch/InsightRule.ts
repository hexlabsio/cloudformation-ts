import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type InsightRuleAttributes = { Arn: Attribute<string>; RuleName: Attribute<string> }
export function insightRule(insightRuleProps: InsightRule): InsightRule & { attributes: InsightRuleAttributes } { return ({ ...insightRuleProps, _logicalType: 'AWS::CloudWatch::InsightRule', attributes: { Arn: 'Arn', RuleName: 'RuleName' } }) }

export interface InsightRule extends KloudResource {
    ruleState: Value<string>;
    ruleBody: Value<string>;
    ruleName: Value<string>;
}