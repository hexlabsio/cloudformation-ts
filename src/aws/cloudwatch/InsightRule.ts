import { Value } from '../../kloudformation/Value';
import { TagsProps } from './insightRule/TagsProps';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type InsightRuleAttributes = { Arn: Attribute<string>;RuleName: Attribute<string> }
export function insightRule(insightRuleProps: InsightRule): InsightRule & {attributes: InsightRuleAttributes} { return ({ ...insightRuleProps, _logicalType: 'AWS::CloudWatch::InsightRule', attributes: { Arn: 'Arn',RuleName: 'RuleName' } }) }
   
export interface InsightRule extends KloudResource {
  ruleState: Value<string>
  ruleBody: Value<string>
  ruleName: Value<string>
  tags?: TagsProps
}