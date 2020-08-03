import { Value } from '../../../kloudformation/Value';

export interface ResourceCreationLimitPolicyProps {
  newGameSessionsPerCreator?: Value<number>
  policyPeriodInMinutes?: Value<number>
}