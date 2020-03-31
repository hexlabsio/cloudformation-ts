import { Value } from '../../kloudformation/Value';
import { GamePropertyProps } from './matchmakingconfiguration/GamePropertyProps';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type MatchmakingConfigurationAttributes = { Arn: Attribute<string>; Name: Attribute<string> }
export function matchmakingConfiguration(matchmakingConfigurationProps: MatchmakingConfiguration): MatchmakingConfiguration & { attributes: MatchmakingConfigurationAttributes } { return ({ ...matchmakingConfigurationProps, _logicalType: 'AWS::GameLift::MatchmakingConfiguration', attributes: { Arn: 'Arn', Name: 'Name' } }) }

export interface MatchmakingConfiguration extends KloudResource {
    name: Value<string>;
    requestTimeoutSeconds: Value<number>;
    acceptanceRequired: Value<boolean>;
    ruleSetName: Value<string>;
    gameSessionQueueArns: Value<Value<string>[]>;
    gameProperties?: GamePropertyProps[];
    gameSessionData?: Value<string>;
    description?: Value<string>;
    acceptanceTimeoutSeconds?: Value<number>;
    notificationTarget?: Value<string>;
    customEventData?: Value<string>;
    additionalPlayerCount?: Value<number>;
    backfillMode?: Value<string>;
}