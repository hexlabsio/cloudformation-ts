import { Value } from '../../kloudformation/Value';
import { PlayerLatencyPolicyProps } from './gameSessionQueue/PlayerLatencyPolicyProps';
import { DestinationProps } from './gameSessionQueue/DestinationProps';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type GameSessionQueueAttributes = { Arn: Attribute<string>;Name: Attribute<string> }
export function gameSessionQueue(gameSessionQueueProps: GameSessionQueue): GameSessionQueue & {attributes: GameSessionQueueAttributes} { return ({ ...gameSessionQueueProps, _logicalType: 'AWS::GameLift::GameSessionQueue', attributes: { Arn: 'Arn',Name: 'Name' } }) }
   
export interface GameSessionQueue extends KloudResource {
  timeoutInSeconds?: Value<number>
  playerLatencyPolicies?: PlayerLatencyPolicyProps[]
  destinations?: DestinationProps[]
  name: Value<string>
}