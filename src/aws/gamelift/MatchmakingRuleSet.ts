import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type MatchmakingRuleSetAttributes = { Arn: Attribute<string>; Name: Attribute<string> }
export function matchmakingRuleSet(matchmakingRuleSetProps: MatchmakingRuleSet): MatchmakingRuleSet & { attributes: MatchmakingRuleSetAttributes } { return ({ ...matchmakingRuleSetProps, _logicalType: 'AWS::GameLift::MatchmakingRuleSet', attributes: { Arn: 'Arn', Name: 'Name' } }) }

export interface MatchmakingRuleSet extends KloudResource {
    ruleSetBody: Value<string>;
    name: Value<string>;
}