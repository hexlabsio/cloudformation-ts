import { Value } from '../../../kloudformation/Value';

export function playerLatencyPolicyProps(playerLatencyPolicyPropsProps: PlayerLatencyPolicyProps): PlayerLatencyPolicyProps { return (playerLatencyPolicyPropsProps) }

export interface PlayerLatencyPolicyProps {
    policyDurationSeconds?: Value<number>;
    maximumIndividualPlayerLatencyMilliseconds?: Value<number>;
}