import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function insightRule(insightRuleProps: InsightRule & { logicalName?: string }): InsightRule { return ({ ...insightRuleProps, _logicalType: 'AWS::CloudWatch::InsightRule' }) as unknown as InsightRule }

export interface InsightRule extends KloudResource {
    ruleState: Value<string>;
    ruleBody: Value<string>;
    ruleName: Value<string>;
}