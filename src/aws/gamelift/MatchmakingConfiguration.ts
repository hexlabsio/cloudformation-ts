import { GamePropertyProps } from './matchmakingConfiguration/GamePropertyProps';
import { Value } from '../../kloudformation/Value';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type MatchmakingConfigurationAttributes = { Arn: Attribute<string>;Name: Attribute<string> }
export function matchmakingConfiguration(matchmakingConfigurationProps: MatchmakingConfiguration): MatchmakingConfiguration & {attributes: MatchmakingConfigurationAttributes} { return ({ ...matchmakingConfigurationProps, _logicalType: 'AWS::GameLift::MatchmakingConfiguration', attributes: { Arn: 'Arn',Name: 'Name' } }) }
   
export interface MatchmakingConfiguration extends KloudResource {
  gameProperties?: GamePropertyProps[]
  gameSessionData?: Value<string>
  description?: Value<string>
  acceptanceTimeoutSeconds?: Value<number>
  notificationTarget?: Value<string>
  customEventData?: Value<string>
  name: Value<string>
  additionalPlayerCount?: Value<number>
  backfillMode?: Value<string>
  requestTimeoutSeconds: Value<number>
  acceptanceRequired: Value<boolean>
  ruleSetName: Value<string>
  gameSessionQueueArns: Value<Value<string>[]>
}