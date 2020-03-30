import { Value } from '../../kloudformation/Value';
import { PlayerLatencyPolicyProps } from './gamesessionqueue/PlayerLatencyPolicyProps';
import { DestinationProps } from './gamesessionqueue/DestinationProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function gameSessionQueue(gameSessionQueueProps: GameSessionQueue & { logicalName?: string }): GameSessionQueue { return ({ ...gameSessionQueueProps, _logicalType: 'AWS::GameLift::GameSessionQueue' }) as unknown as GameSessionQueue }

export interface GameSessionQueue extends KloudResource {
    name: Value<string>;
    timeoutInSeconds?: Value<number>;
    playerLatencyPolicies?: PlayerLatencyPolicyProps[];
    destinations?: DestinationProps[];
}