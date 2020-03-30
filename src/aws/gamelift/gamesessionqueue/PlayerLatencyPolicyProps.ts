import { Value } from '../../../kloudformation/Value';

export function playerLatencyPolicyProps(playerLatencyPolicyPropsProps: PlayerLatencyPolicyProps): PlayerLatencyPolicyProps { return (playerLatencyPolicyPropsProps) as unknown as PlayerLatencyPolicyProps }

export interface PlayerLatencyPolicyProps {
    policyDurationSeconds?: Value<number>;
    maximumIndividualPlayerLatencyMilliseconds?: Value<number>;
}