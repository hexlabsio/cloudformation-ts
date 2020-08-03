import { Value } from '../../../kloudformation/Value';

export interface PlayerLatencyPolicyProps {
  policyDurationSeconds?: Value<number>
  maximumIndividualPlayerLatencyMilliseconds?: Value<number>
}