import { Value } from '../../kloudformation/Value';
import { GamePropertyProps } from './matchmakingconfiguration/GamePropertyProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function matchmakingConfiguration(matchmakingConfigurationProps: MatchmakingConfiguration & { logicalName?: string }): MatchmakingConfiguration { return ({ ...matchmakingConfigurationProps, _logicalType: 'AWS::GameLift::MatchmakingConfiguration' }) as unknown as MatchmakingConfiguration }

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