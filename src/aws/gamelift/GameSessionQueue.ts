import { Value } from '../../kloudformation/Value';
import { PlayerLatencyPolicyProps } from './gamesessionqueue/PlayerLatencyPolicyProps';
import { DestinationProps } from './gamesessionqueue/DestinationProps';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type GameSessionQueueAttributes = { Arn: Attribute<string>; Name: Attribute<string> }
export function gameSessionQueue(gameSessionQueueProps: GameSessionQueue): GameSessionQueue & { attributes: GameSessionQueueAttributes } { return ({ ...gameSessionQueueProps, _logicalType: 'AWS::GameLift::GameSessionQueue', attributes: { Arn: 'Arn', Name: 'Name' } }) }

export interface GameSessionQueue extends KloudResource {
    name: Value<string>;
    timeoutInSeconds?: Value<number>;
    playerLatencyPolicies?: PlayerLatencyPolicyProps[];
    destinations?: DestinationProps[];
}