import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function matchmakingRuleSet(matchmakingRuleSetProps: MatchmakingRuleSet & { logicalName?: string }): MatchmakingRuleSet { return ({ ...matchmakingRuleSetProps, _logicalType: 'AWS::GameLift::MatchmakingRuleSet' }) as unknown as MatchmakingRuleSet }

export interface MatchmakingRuleSet extends KloudResource {
    ruleSetBody: Value<string>;
    name: Value<string>;
}